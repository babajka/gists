package main

// The script returns total numbers for all publications by the language of content.

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Article struct {
	Locales map[string]struct {
		Metrics map[string]int `json:"metrics"`
	} `json:"locales"`
}

type Wrapper struct {
	Data []Article `json:"data"`
}

func main() {
	loginReq, _ := json.Marshal(map[string]string{
    // TODO: fill in.
		"email":    "",
		"password": "",
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

	totals := map[string]int{
		"be": 0, // total for BE locales
		"ru": 0,
	}

	for _, article := range wrapper.Data {
		for locale, localeStruct := range article.Locales {
			for _, langMetric := range localeStruct.Metrics {
				totals[locale] += langMetric
			}
		}
	}

	fmt.Println("TOTALS: ", totals)

	fmt.Println("totaltotal: ", totals["be"]+totals["ru"])
}
