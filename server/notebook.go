package server

import (
	// "fmt"
	cyako "github.com/Cyako/Cyako.go"
)

type Notebook struct{}

func init() {
	var m Notebook
	cyako.LoadModule(m)
}
