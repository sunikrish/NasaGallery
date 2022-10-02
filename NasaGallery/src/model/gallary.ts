export class Gallery{
    "collection" : Collection
}

  
  export class Collection
  {
     "version" : string
      "href" : string
      "items" : Items[]
      "links" : Links[]
  }
export class Items{
    "data" : Data[]
    "links" : Links[]
    "href" : string
}
  export class Links
  {
    "href": string
    "rel":string
    "render":string
  }

  export class Data{
    "media_type" : string
    "nasa_id":string
    "title":string
    "center": string
    "date_created": string
    "description" :string
  }

  export class searchqueryParam
  {
    "searchText" : string
     "mediatype" :string
     "startyear" : string
     "endyear": string
  }