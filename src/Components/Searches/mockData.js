const mockData = {
    "CTown": {
      "name": "CTown",
      "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABL1BMVEUAAAD/////1SHt7e0AAAMAAAX5+fn4+Pj19fUAAwCzs7Pg4ODs7Oz8/Px3d3cAAAisrKzKysrl5eWdnZ1BQUGmpqYjIyONjY3Y2NjExMROTk7/1CRpaWnT09NCQkIoKCienp5hYWFxcXGTk5MYGBgvLy9JSUk5OTkTExOGhoYdHR29vb1YWFgAAA//2xx9fX1nWBgmIwo4LRA0MAYXFwAkHA6Yhim+piPVsx7owiL0xyPKqSWxkCx3Zhywkx/20iKBahgGEgDTsC6aghM5HRBqTRQAEQ0/OQ/qxzhbRAySdibnxB1QRhTTuTEVCQArKAF/cSAyJRPiyDGOdRNEMQY7Kw8gDRZDMwAiEwk+OQWOgxytmi3CqTVtYRtTSwoZGQBzXCc4MxhYPBq/qBupgSubACxFAAAMOklEQVR4nO2aeXvbxhHGlwdIkCAIArzv+xJJUPIlUbIIRWoi2fIV222Sxnbapt//M3RvLEDalmM4+aPze2gLIA7ui9mdmZ0FQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8HaFYSJfEf/NEsS9OQlsmQz1/drihJYo1a5ujevfv3Xz7A+9ZKS2b+1BZUSv1hffit7q5Z6OHho+OTzSnh5Ozx+X0sOvmtfm4Ps4JjxmKxevR35h3xcLvx4vG467KP2zw9u3iJ0Le3Yqk/LzfIhh0jtA+i/4kMWn13fum5zXgI7+bqb9rq24kcdQY9u5ZLxWJGBe9mqcJEJ/LfsSz0/e9efEcfNejrpw+0b+FtSq3hGs1jkgX+ju/2o/+1H66w/XDXDGlssv2z66h/76BaN3JpLKrvK4xVEeqn6NY60h/LrCzr+tLbYz7fjjfnKBozzrr9ORlkDaapiEqKQrOPujrdKkTxW5KVpj157X5SYNP1nqKvVTibDIYLJ5Ey53inb3KrVQxFojNFDt2oRSFM4cltfO8QVDpr07v6CoUz8l8jwXUY2G21WG8cIFRXFOIwsaB/9aik4WiHe9+zzafUEYFxbGLvkbX6co+a6bSG2XaNuEl/xOWlR2khVFAVxnpl+icdpTPVjp5/sotKvPO73nJ2MOJbcyOR4ppQXsqozVCVbeEYWA0o1NvyIUTGi63wmJ8EP4XNs7t01Gl1Ucs5diFP7LbUpSY1LsxRkW1MsGn12B7KUclLauhp8y4mxM+g6Z490D6X4HSLOd5G0yEuP8t3sE2Kfvtr/Ht9ip8IG55pO6BwEZlC9PL0bn2UqPRe4Ss+qbBhBJo5RSXmUWLtTGDA5ZnCXBdfw7xnutVWL6UjNxK0x/E7K4zHb46sPfc46Ayq2SwZeksn2NfaU1Tmm62A0zRqTAe5aMF7biehnKCXopGH0PXpbir68Y7qvtGSgbE4Kw3KOKvEwU0fIzQOWJBgz0S7baQeNPkTIPfgvTerDtSo8rakpT3eEeiy4LDXtO7Nj0luRZwxVwttxUsspTVUesKIZj+3e5TOklriEYhBy0waiUIteXQSVoj33duz7dX2chPOUklQvMCXTRv5nm3kzGBr56jBv8nVy+U2305UuCeJGaldhdSf8ATO6KIDxczZaBSi97uBovn6zVt69O2b26Adm97m+LC1sBO7TaWt5dZq0yE04OYdol7gNEPtrFRGlw/eRiByRJO3JVGwk9Lts7/TJJtUbN4e0/kGxrs92T4+v2eh4GBRqXGn6HTZzQdpuluXChj1tbLTIydmuBPFGRwaykO5SJyp9eIyNNqa7vYfiJctMpb18zH+6nTz/Or99RGyVuRAf09nY00aMNtWxd1Zw3HnG6qnFdRUm53Lhy8tzvCoaOpGJM5U++k07C4vf8azKa4fazw63r76BY9XbFFSksK2He9xGDiaGfVynnYxcynuzqyN3f5YNWJBSdNMlptxZ2qTbXyubmeHrXEU+rDC8/CE132PVpaI6UkLT/0tK8n0JfE/8m04Iui1xbw1wV2zQRWmG+LuPA+dBLIZbKmuvEOKhYQB80oJujPpT0coMqx/NkMCT1589qLAbCemOD2m0M+ZeckFJ2Yzxe5VJdfW2dPopHGvtAvzmf8j034xmoD4azhUfG4SqPH26YZdYGmJX/kbs3HY5g0t8bks8RiKe8LJ6kj0Wp64jIr5SUVJBue2k0hHFC7ehUPF5yZIWGErVx8OGmPp9wxZ+auJkUbh/oOGPMW7EI/JjWjmuoGbz5ZzKplXFKMo71khhXgY7uSdGhmMeAhaGo4hDz+cX/0mjvBxZkqnICxVb007Ay6Xd1o/RLSY4Bx2J0spcLzMF7OkFkwtzuJqKpJw8c4NRYt/7ZzC1zKSL94eXp1tTt3NjyKaLHnckK7Fd7OO3DLYoZEwYpq62sZyKgbdQamB1o6M9AX/cUyiUPhraBg2n+45SVvdP3y0vWzSKaJ7+5vIvaeOaiXCPJTIYQMPxCGyl7ALVaVjzlrVAk6QbHWYmnicLuWI/WpWV+GcbZtEaj/VNOv6Ynuywcpokuo2m5cPhA15SFen44WwQnlsli0POl0+tEZTWobp8E6Nlmn/ilwDTaOrKFoXoWgRv/nRCmhMHt2EynDH/kEeN2z/m0w2KHBPI6etYrbt6CQWTMRTmKpZRBuNauH7/nHe7kT8KyJcHtc0bOXAWKUncLgzddRllKGSlueqKEzJSZnccLI3DqUXFo+FPTojAldj/bwJG/H0iWZlMjQ/s3C29tMtq+zL05oX/uUiFwlkkJNsjnqgVK7sf39Qypd7ZKMvRmpqKSeGa5mN8kN55kwTEbgaDW3DATH+/C1arWjmhj3Ks9eho+7mFz8n6DBnKr0Jp9Ia9orVvsxQ+tm2Tiy39B8KM2JeXh7IzXEkYX9D9/1DWK92FLo374kFNUuz0PebnfnxJfIXTLu8R+52RlTK9wqFXp5akZuKjiulONrgO6mGf0qQPff9UjR0f7NbpfHOzml2+v0x6aKhgPnG8lONmS0GTohWnYdKPUsMxz1Suh/IwRdCIe6MU356sJAVQd6G85TjfcXE5s3z4+e3p/sO/FuxIcmtE4adDeXI3awSFtO9mSwL15GsvFHBLLakcU40Ys5UXwckGl+vEE+Nnnh76hg4/DX31sHdLVJsiPrDwURG8O6yWibHxoG6J7bVSKSoOJ9Ro4nNukCC3IH3hnxLzRnM2W6Lv5CklfzheF9NrSlCfIjb630vLlQag+HC0FO0hB30i6yzlUzRMdVqnMlMS2um3LbFQM5gfr0zJa39j7e3IkxsGFbYdLdsni8ZjZfVbNsQWaW+DM52OWthunS/vXu0TRRWxSOYqWdEtBK83V8a3cfNS/+yWQNPB4jhVKpIFq6dui2OGRU+OY61QzVxpgrJ5UScPMhVxpgZ0Uqw9vDyjvri3iG/ZjLPkkX4XQrChLkBHpKVsilsUQ6cpqtZGvWYJaYrNVUnWtG8VpPJJD+8bt5lfc1tXlk8nwsGaAWbdzKdl6OKoqXTwBJaW10zLNJmsNmVSWaPvjcyuh9p9ReiXXif14d9z7sXGq/C9XdmSRxnwo6IKcWMNTyNgka0R4oR2Rte3D/18GZXZqnONBqFKHnh7fWcAQvG3x1pGW7D8b4eii2XqA3Ylqwosnq3WRHdkFFQ/RFboJDWRnRZNaU7i2Gr8fXhgrLStFfe5xTGf3+IMhb3o7Ndh1Grl+fLLl+DMOUq/FwoDBgxMF9iE2j+aGjoQOveoBTpS1g4C33/qZcVyMsm20CZMTQNjGXH/GnzVZaWOLEgFaorb3PkL2akWUZEXqsxE05dLQF0J1H1UiLyl7N4PFy08SWevsG5jDIxZq7GzNncFHJNehrcrzBjp/xrKGtZepQ10+6iMBx0/F65HBZsI6KKIp4FkqWYF1c3H+mnrnf8DFlJVeEggXtlq3QgjOmIMjX3pSaP1fwwna0f+CORmE2MxLA3qbCSN58ER6OQVJbICLv+FTsc8faezGia3skFWbgIlBlHolTG3b4um8l7X7qHv+mIHI05E9+IxBGV9Fg6YZfXS99uB5N8eVHTqSPmk+CIli8YONj9dHVCV9PIx6V91vV+f/Vg9fHXaHkukpLTi47M4Go1semwdvrrFdQRVYdLWaY4GKNOuZ3Qaayh6zVzdZBGRUZbJX/78N/LjefRvNvb3Bxf3NPIotpH3xPmkdz0J6t7sgGxYE1breeMrBoEuo11wXaywplSy5E5MQuskb4OTYYjMSR6+eH9m0ePHl0cXn+H6KKapn38RWjuahSXsJNcSzc0qi9662UwTxkbJrt+omQ9OBmfJML3/avYrSiG54d1vxQnYlymUmoN6wYZjktRG62oKUFWFMnbEcX8MEnKnU7lLtFQKoqVgjLhSJd32nhQtlnzSQLTZ+lRMbQuOeddQY/U1QS4q0i+PJMO+PxWnad1+mLpf9vttGj1bCxkEP/EXdUwtC6pT3igWaK/mkaCooda0lkXF9nhQOoes0q3Q8J7yWHX5HQ8/1vrObKJpRcTuYSPXWR7UVQUAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD+f/wFJZAuStK5cGAAAAABJRU5ErkJggg==",
      "zipcodes": ["10456", "10462", "11101", "10029"],
      "website": "https://www.ctownsupermarkets.com/",
      "products": 
      [
        {
          "position": 1,
          "link": "https://www.walmart.com/search?q=Milk",
          "title": "Lactaid Milk, Lactose Free",
          "source": "CTown",
          "size": "96 Ounces",
          "price": "$9.99",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9tZExlanFUSWdiWk0wMTUwMWp1MWJMM09VTktWZDVDT0k5VU15SElBLmpwZWcifQ=="
          },
          {
          "position": 2,
          "link": "https://www.walmart.com/search?q=Milk",
          "title": "Farmland Organic 2% Reduced Fat Milk",
          "source": "CTown",
          "size": "64 Ounces",
          "price": "$6.09",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy8zZE9URVhVWXpwT0htdDhJUjdJbW5ZV2dwWmk1dnlpS1ZsbXBMRXk0LmpwZyJ9"
          },
          {
          "position": 3,
          "link": "https://www.walmart.com/search?q=Milk",
          "title": "Farmland Fat Free Milk - 1/2 Gallon",
          "source": "CTown",
          "size": "1/2 Gallon",
          "price": "$3.69",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9UcFdLVFN3NEZmckE4Vmo1ajhSWHg1TVV0S0JWSnlqQ0FjdDNleGdvLmpwZyJ9"
          },
          {
          "position": 4,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=water",
          "title": "Poland Spring Spring Water, 100% Natural",
          "source": "CTown",
          "size": "24 x 16.9 Fluid Ounces",
          "price": "$11.59",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy80Z3VwQ2dHZmJqYzZGdld4TTJKUDVwUWRGdHJWZGE0U0hPc2dFRjVYLmpwZyJ9"
          },
          {
          "position": 5,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=water",
          "title": "Poland Spring Spring Water, 100% Natural, Minis",
          "source": "CTown",
          "size": "12 x 8 Fluid Ounces",
          "price": "$5.59",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9UcFdLVFN3NEZmckE4Vmo1ajhSWHg1TVV0S0JWSnlqQ0FjdDNleGdvLmpwZyJ9"
          },
          {
          "position": 6,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=water",
          "title": "Poland Spring Distilled Water",
          "source": "CTown",
          "size": "1 Gallon",
          "price": "$2.69",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9JNzNodzhEMzhMTkdON1R5dE01ZDIwbW9mcFlMWGExUWhITGlRR1psLmpwZWcifQ=="
          },
          {
          "position": 7,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=egg",
          "title": "Nature's Yoke Extra Large Brown Eggs",
          "source": "CTown",
          "size": "1 Dozen",
          "price": "$8.39",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9EeXpPV3VhRmxLNmJBem9pRVRCV2x0UExYOGdpWUhRUWVYanB2M09qLmpwZyJ9"
          },
          {
          "position": 8,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=egg",
          "title": "Egglands Best Grade A Large Eggs",
          "source": "CTown",
          "size": "1/2 Dozen",
          "price": "$6.89",
          "thumbnail": "data:image/jpeg;base64,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A6Fa9TsaqgMVG1xjdhOBwcsN3Ixn0w1bWb0dMay0Fq/GRkYU+Lay+YxnHmQOoJz0X0j9RJzIyufdH2KwbWAuQjbyUKqVLlyFHh2k7fLp5jEii3vHwr63xMBnK4rBzgn5L0+gzwZ0Mn9YzFmvPZQ4w7qyoEDhvEuXLOwP7zE8n098+ymvYoXcWwOWY5Zj5k+sz/UR+okXWhj5iWU/E3tKy4HT6y3TLwSfPp7SBfERASiynPI49D0l8QPA1dnkv+oSq2m0qwXKEggMChKkj4gDxkes2kQNCNDqcY79/PnZp889P2fL+szBdPrMDL158zkc/ptGP6950MSZm61NWXl5tAdPrMnxpgngYXgfSXivU55Fe3PrnGf+bribiJCZrvyjyavu7f3B/iWZpW/mn+pZsYhRrGqszwgA/wCcTyarSaosCjKqYAKbtvOeTuHJ49ses30QmJs5l9BrseC9U5HJ/NyM9MMOOPPPn+koPZPaB66zzUnCIoIAAIAA4zg/XM62JeK5jp5Iq/um/wCHJJ2R2gBg60scLyVXqPPp55/yHymA7G7Q3A/jfD4srgZOfh8XlgfX0nYRJ3s9nlCuWHKnsvtHBC61AeQpapGxxxnw84M3FWntCqGZGYKAzcrubHJxjjJmyiVqqmUxFnlWpschf8R/lKzp7Pmn1b+U90SqWrfR2llYWBQu7K8lWz0z7fxlZ7PtLbu/I+aDGwjHTGM5885z+nE3EQtFcx/DRp2TaAAdXaTtVSx2kkq2S3Tgt0Pp0xLH7KcsD+JsUBt21cgHwkbTzkjnPXqo9c7iIW3tV73+kejxJpGAAL5wMZKkk/5zL8If3/8AT/5nriGbyppAOSS3v0+k9URAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z"
          },
          {
          "position": 9,
          "link": "https://www.walmart.com/search?q=Milk",
          "title": "Egg Beaters Egg Whites, 100% Liquid",
          "source": "CTown",
          "size": "16 Ounces",
          "price": "$4.79",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy90ZWZXTG1rRWRBMFhHRjRQYmt4TFYzUmF2aTZ4RUJMUVViSDNYa3NpLmpwZyJ9"
          },
          {
          "position": 10,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=cheese",
          "title": "Kr Shred Cheddar Cheese",
          "source": "CTown",
          "size": "8 Ounces",
          "price": "$3.89",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9iRW9zZTRORVVrYlQ3TU5BT01xZlZVZFdGcTZyQmVSTFB3ODdrcXpTLmpwZyJ9"
          },
          {
          "position": 11,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=cheese",
          "title": "Polly O Reduced Fat Mozzarella & Cheddar Cheeses - 12 snacks",
          "source": "CTown",
          "size": "9.52 Ounces",
          "price": "$6.89",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9XQjR2bmVHYVptMWY3SE9HNkhabnREMkJOVURCUTZYU3lPdUtON0hqLmpwZWcifQ=="
          },
          {
          "position": 13,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=cheese",
          "title": "Kraft Singles American Cheese Slices",
          "source": "CTown",
          "size": "20 Slices",
          "price": "$4.99",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy8wUG12Z2V1a1Z6V3RiZ3h4b3J5b3F5Q1d0c0F3Z3p2WjB0VE56VG0uanBnLmpwZyJ9"
          },
          {
          "position": 14,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=cheese",
          "title": "Kraft Velveeta Smooth & Melty Pasteurized Process Cheese Spread",
          "source": "CTown",
          "size": "15 Ounces",
          "price": "$4.49",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy8yV01jSW5VWE1oN0l0dnRjR2lQNVlXdDNVamN2a3FzMWdNUG9vLmpwZyJ9"
          },
          {
          "position": 15,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=cheese",
          "title": "Kraft Velveeta Mac & Cheese Original Shells & Cheese",
          "source": "CTown",
          "size": "12 Ounces",
          "price": "$3.99",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9tQ1d0c0F3Z3p2WjB0VE56VG0uanBnLmpwZyJ9"
          },
          {
          "position": 16,
          "link": "https://www.walmart.com/search?q=Milk",
          "title": "Horizon Organic Whole Milk",
          "source": "CTown",
          "size": "1/2 Gallon",
          "price": "$4.79",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy81U291Q0Z3RWRBMFhHRjRQYmt4TFYzUmF2aTZ"
          },
          {
          "position": 17,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=chicken",
          "title": "Perdue Chicken Breast Strips, Original",
          "source": "CTown",
          "size": "12 Ounces",
          "price": "$5.29",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9FUlJ1WlZOV0lIa2h1bEd2WUVVU0tYQmRJQjJOVVhsVU1FNTduTTFhLmpwZyJ9"
          },
          {
          "position": 18,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=chicken",
          "title": "Oscar Mayer Chicken Breast, Rotisserie Seasoned",
          "source": "CTown",
          "size": "9 Ounces",
          "price": "$8.59",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy96QkRJR0VxNkdrcWVMVEkzdDFtSHo5MEJhNFRVQ0ZRRFc1djRtT2ZzLmpwZWcifQ=="
          },
          {
          "position": 19,
          "link": "https://shop-mercato.ctownsupermarkets.com/5686-Mosholu-Ave-Bronx?keywords=fruit",
          "title": "Driscoll's Strawberries",
          "source": "CTown",
          "size": "1 Pound",
          "price": "$3.99",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM4lcW2XraWkaQsNbhNWeEpywcUfR2PslzXgIIW3xpTwQeDJpY6U274D7Dg6aVSZ5Dwh2f9bfWfC2vcANRVS_Z2rV1bD6fzcSsmGqngyXg2GbGWUt7D3_jn4Qe0gws8TVVje3UWA&usqp=CAc"
        }     
      ]
    },
    "Target": {
      "name": "Target",
      "logo": "https://corporate.target.com/getmedia/890f3192-ce35-496a-a3cf-15fc0a8105d0/Target_Bullseye-Logo_Red.jpg",
      "zipcodes": ["10456", "10462", "11101", "10029"],
      "website": "https://www.target.com",
      "products": [
        {
          "position": 1,
          "link": "https://www.target.com/s?searchTerm=milk&tref=typeahead%7Cterm%7Cmilk%7C%7C%7Chistory",
          "title": "Lactaid Milk, Lactose Free",
          "source": "Target",
          "size": "96 Ounces",
          "price": "$7.69",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9tZExlanFUSWdiWk0wMTUwMWp1MWJMM09VTktWZDVDT0k5VU15SElBLmpwZWcifQ=="
          },
          {
          "position": 2,
          "link": "https://www.target.com/s?searchTerm=milk&tref=typeahead%7Cterm%7Cmilk%7C%7C%7Chistory",
          "title": "Horizon Organic 2% Reduced Fat Milk",
          "source": "Target",
          "size": "64 Ounces",
          "price": "$5.79",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_fb2893b7-e892-40e3-b64f-bf54e4c99aa9?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 3,
          "link": "https://www.target.com/s?searchTerm=milk&tref=typeahead%7Cterm%7Cmilk%7C%7C%7Chistory",
          "title": "Good and Gather Organic Skim Milk - 1/2 Gallon",
          "source": "Target",
          "size": "1/2 Gallon",
          "price": "$4.99",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_79306b0e-8b9f-46df-99f9-d250f2f5845a?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 4,
          "link": "https://www.target.com/s?searchTerm=water&tref=typeahead%7Cterm%7Cwater%7C%7C%7Chistory",
          "title": "Poland Spring Spring Water, 100% Natural",
          "source": "Target",
          "size": "32 x 16.9 Fluid Ounces",
          "price": "$8.99",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_896d5b6f-c7d1-4cb2-a37f-124f54370b2b?wid=1200&hei=1200&qlt=80&fmt=webp"
          },
          {
          "position": 5,
          "link": "https://www.target.com/s?searchTerm=water&tref=typeahead%7Cterm%7Cwater%7C%7C%7Chistory",
          "title": "Poland Spring Spring Water, 100% Natural, Minis",
          "source": "Target",
          "size": "12 x 12 Fluid Ounces",
          "price": "$4.59",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_7e7c829d-a8b8-44e9-8d0d-1b04aecfcaf4?wid=1200&hei=1200&qlt=80&fmt=webp"
          },
          {
          "position": 6,
          "link": "https://www.target.com/s?searchTerm=water&tref=typeahead%7Cterm%7Cwater%7C%7C%7Chistory",
          "title": "Poland Spring Distilled Water",
          "source": "Target",
          "size": "1 Gallon",
          "price": "$3.19",
          "thumbnail": "https:https://target.scene7.com/is/image/Target/GUEST_03314696-132d-4389-951b-b2ab8e1a5808?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 7,
          "link": "https://www.target.com/s?searchTerm=Nature%27s+Yoke+Extra+Large+Brown+Eggs&tref=typeahead%7Cterm%7CNature%27s+Yoke+Extra+Large+Brown+Eggs%7C%7C%7Chistory",
          "title": "Good & Gather Cage-Free Fresh Grade A Large Brown Eggs",
          "source": "Target",
          "size": "1 Dozen",
          "price": "$2.89",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_fdcd2e42-1d87-4b92-aebc-abab6719cb08?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 8,
          "link": "https://www.target.com/s?searchTerm=egg&tref=typeahead%7Cterm%7Cegg%7C%7C%7Chistory",
          "title": "Egglands Best Grade A Large Eggs",
          "source": "Target",
          "size": "1 Dozen",
          "price": "$4.99",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_5bbec1b9-3020-4a36-a873-66ff699130dd?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 9,
          "link": "https://www.target.com/s?searchTerm=egg&tref=typeahead%7Cterm%7Cegg%7C%7C%7Chistory",
          "title": "Good & Gather Cage-Free Liquid Egg Whites",
          "source": "Target",
          "size": "32 Ounces",
          "price": "$5.79",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_1043dd92-363c-4da8-b309-8c451c4024d4?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 10,
          "link": "https://www.target.com/s?searchTerm=cheese&tref=typeahead%7Cterm%7Ccheese%7C%7C%7Chistory",
          "title": "Kr Shred Cheddar Cheese",
          "source": "Target",
          "size": "8 Ounces",
          "price": "$3.89",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9iRW9zZTRORVVrYlQ3TU5BT01xZlZVZFdGcTZyQmVSTFB3ODdrcXpTLmpwZyJ9"
          },
          {
          "position": 11,
          "link": "https://www.target.com/s?searchTerm=cheese&tref=typeahead%7Cterm%7Ccheese%7C%7C%7Chistory",
          "title": "Polly O Reduced Fat Mozzarella & Cheddar Cheeses - 12 snacks",
          "source": "Target",
          "size": "9.52 Ounces",
          "price": "$6.89",
          "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9XQjR2bmVHYVptMWY3SE9HNkhabnREMkJOVURCUTZYU3lPdUtON0hqLmpwZWcifQ=="
          },
          {
          "position": 13,
          "link": "https://www.target.com/s?searchTerm=cheese&tref=typeahead%7Cterm%7Ccheese%7C%7C%7Chistory",
          "title": "Kraft Singles American Cheese Slices",
          "source": "Target",
          "size": "24 Slices",
          "price": "$6.49",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_60247e44-38ea-43a9-9d94-5e94ecc3c8c5?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 14,
          "link": "https://www.target.com/s?searchTerm=cheese&tref=typeahead%7Cterm%7Ccheese%7C%7C%7Chistory",
          "title": "The Laughing Cow Garlic & Herb Spreadable Cheese",
          "source": "Target",
          "size": " 5.4 Ounces / 8 Count",
          "price": "$3.69",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_0be1385f-c0f0-4ee2-a119-d3d3a9f5df7f?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 15,
          "link": "https://www.target.com/s?searchTerm=cheese&tref=typeahead%7Cterm%7Ccheese%7C%7C%7Chistory",
          "title": "Kraft Velveeta Mac & Cheese Original Shells & Cheese",
          "source": "Target",
          "size": "12 Ounces",
          "price": "$3.99",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_dd690b7e-60eb-45f0-8cb9-f4b77e14fbc5?wid=600&hei=600&qlt=80&fmt=webp"
          },
          {
          "position": 16,
          "link": "https://www.target.com/s?searchTerm=milk&tref=typeahead%7Cterm%7Cmilk%7C%7C%7Chistory",
          "title": "Horizon Organic Whole Milk",
          "source": "Target",
          "size": "1/2 Gallon",
          "price": "$4.79",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_2a359408-3f61-45df-95b1-0859e68867c3?qlt=65&fmt=webp&hei=350&wid=350"
          },
          {
          "position": 17,
          "link": "https://www.target.com/s?searchTerm=chicken&tref=typeahead%7Cterm%7Cchicken%7C%7C%7Chistory",
          "title": "Perdue Chicken Breast Strips",
          "source": "Target",
          "size": "1.25 Pounds",
          "price": "$7.49",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_7274b9b7-ce60-4ad6-8918-54f001b24865?wid=600&hei=600&qlt=80&fmt=webp"
          },
          {
          "position": 18,
          "link": "https://www.target.com/s?searchTerm=chicken&tref=typeahead%7Cterm%7Cchicken%7C%7C%7Chistory",
          "title": "Oscar Mayer Chicken Breast, Rotisserie Seasoned",
          "source": "Target",
          "size": "9 Ounces",
          "price": "$4.99",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_df8b8a7a-a33b-471c-bd7f-6240f78c38bb?qlt=65&fmt=webp&hei=350&wid=350"
          }, 
          {
          "position": 19,
          "link": "https://www.target.com/s?searchTerm=strawberries&category=0%7CAll%7Cmatchallpartial%7Call+categories&tref=typeahead%7Cterm%7C0%7Cstrawberries%7Cstrawberries%7C%7C%7Cservice%7C%7C%7C%7C%7Ccontext%7Efacets_sb&searchTermRaw=straw",
          "title": "Strawberries",
          "source": "Target",
          "size": "1 Pound",
          "price": "$4.99",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM4lcW2XraWkaQsNbhNWeEpywcUfR2PslzXgIIW3xpTwQeDJpY6U274D7Dg6aVSZ5Dwh2f9bfWfC2vcANRVS_Z2rV1bD6fzcSsmGqngyXg2GbGWUt7D3_jn4Qe0gws8TVVje3UWA&usqp=CAc"
        }
      ]
    },
    "Walmart": {
      "name": "Walmart",
      "logo": "https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg",
      "zipcodes": ["10456", "10462", "11101", "10029"],
      "website": "https://www.walmart.com",
      "products": [
        {
          "position": 22,
          "link": "https://www.walmart.com/search?q=coffee",
          "title": "Folgers Classic Medium Roast Ground Coffee",
          "source": "Walmart",
          "price": "$4.92",
          "size": "9.6 Ounces",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_dc756103-223e-46b7-9726-24cfb5b4ddbd?qlt=65&fmt=webp&hei=350&wid=350" 
        },
        {
          "position": 22,
          "link": "https://www.walmart.com/search?q=coffee",
          "title": "Cafe Bustelo Espresso Dark Roast Ground Coffee",
          "source": "Walmart",
          "size": "10 Ounces",
          "price": "$5.37",
          "thumbnail": "https://i5.walmartimages.com/seo/Caf-Bustelo-Espresso-Style-Dark-Roast-Ground-Coffee-10-oz-Can_72a50f82-8b98-4e51-9e09-0313091e810d.78856991d9ead7ecd695f330f3d9ee29.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
        },
        {
          "position": 23,
          "link": "https://www.walmart.com/search?q=coffee",
          "title": "SToK Black Unsweetened Cold Brew Coffee",
          "source": "Walmart",
          "price": "$5.58",
          "size": "48 fl Ounces",
          "thumbnail": "https://target.scene7.com/is/image/Target/GUEST_29dcae9f-9f6c-419f-a283-4c05b714ee22?wid=600&hei=600&qlt=80&fmt=webp"
        },
        {
          "position": 23,
          "link": "https://www.walmart.com/search?q=coffee",
          "title": "Kauai Whole Bean Coffee, Koloa Estate Dark Roast",
          "source": "Walmart",
          "price": "$12.85",
          "size": "10 Ounces",
          "thumbnail": "https://i5.walmartimages.com/seo/Kauai-Whole-Bean-Coffee-Koloa-Estate-Dark-Roast-10-oz-Package_9ab31c68-e4e9-44bf-9be1-54c6ba128436.1dc9613fe87e05801bdf788b064ef8cf.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
        }, 
        {
        "position": 1,
        "link": "https://www.walmart.com/search?q=Milk",
        "title": "Lactaid Milk, Lactose Free",
        "source": "Walmart",
        "size": "96 Ounces",
        "price": "$6.24",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9tZExlanFUSWdiWk0wMTUwMWp1MWJMM09VTktWZDVDT0k5VU15SElBLmpwZWcifQ=="
        },
        {
        "position": 2,
        "link": "https://www.walmart.com/search?q=Milk",
        "title": "Great Value Organic 2% Reduced Fat Milk",
        "source": "Walmart",
        "size": "64 Ounces",
        "price": "$3.98",
        "thumbnail": "https://i5.walmartimages.com/seo/Great-Value-Organic-2-Reduced-Fat-Milk-Half-Gallon-64-fl-oz_3fbcc52f-c25e-44ea-9990-f1dff21d73b0.0611ca57822b048849474b9e4e5662d4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
        },
        {
        "position": 3,
        "link": "https://www.walmart.com/search?q=Milk",
        "title": "Great Value Organic Skim Fat Free Milk",
        "source": "Walmart",
        "size": "64 Ounces",
        "price": "$3.98",
        "thumbnail": "https://i5.walmartimages.com/seo/Great-Value-Organic-Skim-Fat-Free-Milk-Half-Gallon-64-fl-oz_6c9fc9c6-f5ee-4f9a-ad3d-0e31d6649457.959bc81b20013cd75253282a4428b70b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
        },
        {
        "position": 4,
        "link": "https://www.walmart.com/search?q=water",
        "title": "Poland Spring Spring Water, 100% Natural (35 Pack)",
        "source": "Walmart",
        "size": "35 x 16.9 Fluid Ounces",
        "price": "$6.98",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy80Z3VwQ2dHZmJqYzZGdld4TTJKUDVwUWRGdHJWZGE0U0hPc2dFRjVYLmpwZyJ9"
        },
        {
        "position": 5,
        "link": "https://www.walmart.com/search?q=water",
        "title": "Poland Spring Spring Water, 100% Natural, Minis",
        "source": "Walmart",
        "size": "12 x 8 Fluid Ounces",
        "price": "$2.38",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9UcFdLVFN3NEZmckE4Vmo1ajhSWHg1TVV0S0JWSnlqQ0FjdDNleGdvLmpwZyJ9"
        },
        {
        "position": 6,
        "link": "https://www.walmart.com/search?q=water",
        "title": "Poland Spring Distilled Water",
        "source": "Walmart",
        "size": "1 Gallon",
        "price": "$1.69",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9JNzNodzhEMzhMTkdON1R5dE01ZDIwbW9mcFlMWGExUWhITGlRR1psLmpwZWcifQ=="
        },
        {
        "position": 7,
        "link": "https://www.walmart.com/search?q=egg",
        "title": "Marketside Large Cage-Free Brown Eggs",
        "source": "Walmart",
        "size": "1 Dozen",
        "price": "$2.58",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9EeXpPV3VhRmxLNmJBem9pRVRCV2x0UExYOGdpWUhRUWVYanB2M09qLmpwZyJ9"
        },
        {
        "position": 8,
        "link": "https://www.walmart.com/search?q=egg",
        "title": "Egglands Best Grade A Large Eggs",
        "source": "Walmart",
        "size": "1 Dozen",
        "price": "$2.78",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy9UcFdLVFN3NEZmckE4Vmo1ajhSWHg1TVV0S0JWSnlqQ0FjdDNleGdvLmpwZyJ9"
        },
        {
        "position": 9,
        "link": "https://www.walmart.com/search?q=egg",
        "title": "Great Value 100% Liquid Egg Whites",
        "source": "Walmart",
        "size": "32 Ounces",
        "price": "$4.86",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy90ZWZXTG1rRWRBMFhHRjRQYmt4TFYzUmF2aTZ4RUJMUVViSDNYa3NpLmpwZyJ9"
        },
        {
        "position": 10,
        "link": "https://www.walmart.com/search?q=cheese",
        "title": "Great Value Finely Shredded Sharp Cheddar Cheese",
        "source": "Walmart",
        "size": "8 Ounces",
        "price": "$2.22",
        "thumbnail": "https://i5.walmartimages.com/seo/Great-Value-Finely-Shredded-Sharp-Cheddar-Cheese-8-oz_3f490f17-2f67-4e06-9080-4d1c1aa9312e.783aa9b49dcdb9e518be4f97f7a4f158.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
        },
        {
        "position": 11,
        "link": "https://www.walmart.com/search?q=cheese",
        "title": "Polly-O String Cheese Mozzarella Cheese Snacks, 24 ct Sticks",
        "source": "Walmart",
        "size": "24 Ounces",
        "price": "$7.98",
        "thumbnail": "https://i5.walmartimages.com/asr/0e730f60-bcc4-40ec-9564-72d540c1b832.79518bc753512d50861fbe7b82f9ebfd.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
        },
        {
          "position": 19,
          "link": "https://www.walmart.com/search?q=fruit",
          "title": "Fresh Strawberries",
          "source": "Walmart",
          "size": "1 Pound",
          "price": "$4.99",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTM4lcW2XraWkaQsNbhNWeEpywcUfR2PslzXgIIW3xpTwQeDJpY6U274D7Dg6aVSZ5Dwh2f9bfWfC2vcANRVS_Z2rV1bD6fzcSsmGqngyXg2GbGWUt7D3_jn4Qe0gws8TVVje3UWA&usqp=CAc"
        },
        {
        "position": 13,
        "link": "https://www.walmart.com/search?q=cheese",
        "title": "Kraft Singles American Cheese Slices",
        "source": "Walmart",
        "size": "24 Slices",
        "price": "$4.98",
        "thumbnail": "https://i5.walmartimages.com/seo/Kraft-Singles-American-Cheese-Slices-24-Ct-Pk_34e6c549-e792-4f5a-9da5-260a3b9312e5.7b696b54ff949e9142802ea8f38a5c1f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
        },
        {
        "position": 14,
        "link": "https://www.walmart.com/search?q=cheese",
        "title": "Velveeta Original Melting Cheese Dip & Sauce, 16 Oz Block",
        "source": "Walmart",
        "size": "16 Ounces",
        "price": "$5.48",
        "thumbnail": "https://i5.walmartimages.com/seo/Velveeta-Original-Melting-Cheese-Dip-Sauce-16-Oz-Block_b9d405f9-eabe-4440-9834-8fc4e384be35.afbe57faab0ec68b5a7befdb4038df04.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
        },
        {
        "position": 15,
        "link": "https://www.walmart.com/search?q=cheese",
        "title": "Kraft Velveeta Mac & Cheese Original Shells & Cheese",
        "source": "Walmart",
        "size": "12 Ounces",
        "price": "$2.98",
        "thumbnail": "https://i5.walmartimages.com/seo/Velveeta-Shells-and-Cheese-Original-Macaroni-and-Cheese-Dinner-12-oz-Box_62912541-c743-46fa-9e9d-33c3d078855b.797b57add164c164b5b4f0f71844dbac.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
        },
        {
        "position": 16,
        "link": "https://www.walmart.com/search?q=milk",
        "title": "Horizon Organic Whole Milk",
        "source": "Walmart",
        "size": "1/2 Gallon",
        "price": "$4.88",
        "thumbnail": "https:/https://i5.walmartimages.com/seo/Horizon-Organic-Whole-High-Vitamin-D-Milk-Half-Gallon_4fce5a92-df70-40f9-9d0b-68fc6af6b4b4.b79666bc9c9f8492d5f5ab74ce9f7501.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
        },
        {
        "position": 17,
        "link": "https://www.walmart.com/search?q=chicken",
        "title": "Perdue Breaded Chicken Breast Cutlets",
        "source": "Walmart",
        "size": "12 Ounces",
        "price": "$4.46",
        "thumbnail": "https://i5.walmartimages.com/seo/Perdue-No-Antibiotics-Ever-Refrigerated-Breaded-Chicken-Breast-Cutlets-12-oz-Tray_358a6e27-7077-4579-b466-beea2f774cfc.fd4d313bd3a699eda2bbbc47a2818666.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
        },
        {
        "position": 18,
        "link": "https://www.walmart.com/search?q=chicken",
        "title": "Oscar Mayer Chicken Breast, Rotisserie Seasoned",
        "source": "Walmart",
        "size": "9 Ounces",
        "price": "$4.48",
        "thumbnail": "https://db535g4onu9gg.cloudfront.net/eyJidWNrZXQiOiJtZXJjYXRvLWltYWdlcyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJ3aWR0aCI6MjgwLCJoZWlnaHQiOjE4N319LCJrZXkiOiJwcm9kdWN0LWltYWdlcy96QkRJR0VxNkdrcWVMVEkzdDFtSHo5MEJhNFRVQ0ZRRFc1djRtT2ZzLmpwZWcifQ=="
        }       
      ]
    }
  }

export default mockData;