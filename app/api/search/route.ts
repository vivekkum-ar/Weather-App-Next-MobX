import { count } from "console";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:any) {
    // type PostMetaWithSearchString = PostMetadata & SearchString;
    // const term = params.term;
    const {searchParams} = new URL(request.url);
    const term = searchParams.get("term");
    let limit = searchParams.get("limit");
    interface SearchString {
        searchstring: string;
    }
    if(term === null || term === undefined || term === '') {
        var res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}`); 
    }
    else {
        var res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=ascii_name%2Cname&where=(ascii_name%20LIKE%20%22${term}*%22)%20or%20(name%20LIKE%20%22${term}*%22)&limit=${limit}`); 
    }
        // headers: {
        //   'Content-Type': 'application/json',
        //   'API-Key': process.env.DATA_API_KEY!,
        // },
    //   })
    const req = await res.json();
      // Extract names from the results
    const names: string[] = req.results.map((result: any) => {
        const resultNames: string[] = [result.name, result.ascii_name];
        return resultNames.filter((name: string) => name !== null && name !== undefined);
    }).flat();

    return NextResponse.json(names);       
}