import { count } from "console";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:any) {
    // type PostMetaWithSearchString = PostMetadata & SearchString;
    // const term = params.term;
    const {searchParams} = new URL(request.url);
    const term = searchParams.get("term");
    let page = searchParams.get("page");
    interface SearchString {
        searchstring: string;
    }
    if(term === null || term === undefined || term === '') {
        var res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20`); 
    }
    else {
        var res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=name%2Cascii_name%2Calternate_names&where=(name%20%3D%20%27${term}%27)%20or%20(ascii_name%20%3D%20%27${term}%27)%20or%20(alternate_names%20%3D%20%27${term}%27)&limit=20`); 
    }
        // headers: {
        //   'Content-Type': 'application/json',
        //   'API-Key': process.env.DATA_API_KEY!,
        // },
    //   })
    const req = await res.json();
      // Extract names from the results
    const names: string[] = req.results.map((result: any) => {
        const resultNames: string[] = [result.name, result.ascii_name, ...result.alternate_names];
        return resultNames.filter((name: string) => name !== null && name !== undefined);
    }).flat();

    return NextResponse.json(names);       
}