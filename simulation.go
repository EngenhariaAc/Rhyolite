package main

import "fmt"

func main() {
    viscosity := 90
    coolingRate := "fast"

    fmt.Println("🌋 Simulating rhyolite formation...")

    if viscosity > 80 && coolingRate == "fast" {
        fmt.Println("Rhyolite has formed!")
    }
}
