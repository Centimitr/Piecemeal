package main

import (

	// fracework
	cyako "github.com/Cyako/Cyako.go"

	// ciddlewares
	_ "github.com/Cyako/Cyako.go/jsonbase"
	// _ "github.com/Cyako/Cyako.go/statistics"

	// processor codules
	_ "github.com/Centimitr/Piecemeal/server"

	// systec library
	"fmt"
	// "golang.org/x/net/websocket"
	"net/http"
)

func main() {

	c := cyako.Ins()
	c.PrintLoadInfo()

	// SERVER
	fmt.Println(" Running...")
	fmt.Println()
	// http.Handle("/", websocket.Handler(c.Server))
	c.Handle("/")
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		panic("ListenAndServe: " + err.Error())
	}
}
