package main

// The script returns total numbers for all publications by the language of content.

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"sort"
)

type Article struct {
	Locales map[string]struct {
		Title string `json:"title"`
		Metrics map[string]int `json:"metrics"`
	} `json:"locales"`
}

type Wrapper struct {
	Data []Article `json:"data"`
}

func main() {
	loginReq, _ := json.Marshal(map[string]string{
		// TODO: fill in.
		"email":    "fiberybot@wir.by",
		"password": "randombotpassword01",
	})

	resp, err := http.Post("https://dev.wir.by/auth/login", "application/json", bytes.NewBuffer(loginReq))
	if err != nil {
		fmt.Println("failed to login:", resp)
		return
	}

	cookies := resp.Cookies()

	articlesReq, _ := http.NewRequest(http.MethodGet, "https://dev.wir.by/api/articles", nil)
	articlesReq.AddCookie(cookies[0])
	resp, err = http.DefaultClient.Do(articlesReq)
	if err != nil {
		fmt.Println("failed to get articles: ", resp)
	}
	articlesData, _ := ioutil.ReadAll(resp.Body)

	var wrapper Wrapper
	json.Unmarshal(articlesData, &wrapper)

	//totals := make(map[string]int) // BE slug : metrics combined for languages

	type metric struct{
		title string
		metrics int
	}

	var totals []metric

	for _, article := range wrapper.Data {
		articleMetrics := 0
		title := ""
		for locale, localeStruct := range article.Locales {
			for _, langMetric := range localeStruct.Metrics {
				articleMetrics += langMetric
			}
			if locale == "be" || title == "" {
				title = localeStruct.Title
			}
		}
		totals = append(totals, metric{title, articleMetrics})
	}

	sort.Slice(totals, func(i, j int) bool {
		return totals[i].metrics > totals[j].metrics
	})

	fmt.Println("TOP-10 of all time:")
	for _, t := range totals[:10] {
		fmt.Printf("%45s   %d\n", t.title, t.metrics)
	}
}
