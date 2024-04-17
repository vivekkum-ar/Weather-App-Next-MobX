import { count } from "console";
import { NextResponse } from "next/server";

export type data = {
    city: string,
    country: string,
    population: number,
    timezone: string,
    coordinates_lon: number,
    coordinates_lat: number,
    country_code: string,
    elevation: number,
    dem: number,
    last_modified: string,
}
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
        var res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=*&where=(name%20%3D%20%27${term}%27)%20or%20(ascii_name%20%3D%20%27${term}%27)%20or%20(alternate_names%20%3D%20%27${term}%27)&limit=${limit}`); 
    }
        // headers: {
        //   'Content-Type': 'application/json',
        //   'API-Key': process.env.DATA_API_KEY!,
        // },
    //   })
    // const req = await res.json();
    const req = {
        "total_count": 147043,
        "results": [
          {
            "geoname_id": "1125155",
            "name": "Shīnḏanḏ",
            "ascii_name": "Shindand",
            "alternate_names": [
              "Asfazar",
              "Asfazār",
              "OAH",
              "Sabzavar",
              "Sabzavār",
              "Sabzawar",
              "Sabzevar",
              "Sabzevār",
              "Shindand",
              "Shīndand",
              "Shīnḏanḏ",
              "Sindand",
              "shyndnd",
              "Šīndand",
              "Шинданд",
              "شيندند",
              "شیندند",
              "شینډنډ"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "11",
            "admin2_code": "2014",
            "admin3_code": null,
            "admin4_code": null,
            "population": 29264,
            "elevation": null,
            "dem": 1071,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 62.1474,
              "lat": 33.30294
            }
          },
          {
            "geoname_id": "1125267",
            "name": "Shaykh Amīr Kêlay",
            "ascii_name": "Shaykh Amir Kelay",
            "alternate_names": [
              "Sekhamir Kalay",
              "Shaykh Amir",
              "Shaykh Amir Kelay",
              "Shaykh Amīr",
              "Shaykh Amīr Kêlay",
              "Shekh Amir Kelay",
              "Sheykh Amir Kalay",
              "Sheykh Amīr Kalay",
              "Sheykhamirkalay",
              "Shēkh Amīr Kêlay",
              "shykh amyr",
              "shykh amyr kly",
              "Šēkhāmir Kalay",
              "شیخ امیر",
              "شیخ امیر کلی",
              "قريۀ شيخ امير"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "37",
            "admin2_code": "3211",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 1207,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 69.91283,
              "lat": 33.28744
            }
          },
          {
            "geoname_id": "1126606",
            "name": "Sidqābād",
            "ascii_name": "Sidqabad",
            "alternate_names": [
              "Makhmudraki",
              "Qal'eh-i-Wazir",
              "Qal`a Wazir",
              "Qal`ah-ye Wazir",
              "Qal‘a Wazīṟ",
              "Qal‘ah-ye Wazīr",
              "Qal’eh-i-Wazīr",
              "Sedgabad",
              "Sedgābād",
              "Sedqabad",
              "Seḏqābāḏ",
              "Sidqabad",
              "Sidqābād",
              "sdg abad",
              "sdq abad",
              "سدق آباد",
              "سدگ آباد",
              "قلعۀ وزیر"
            ],
            "feature_class": "P",
            "feature_code": "PPLA",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "14",
            "admin2_code": "201",
            "admin3_code": null,
            "admin4_code": null,
            "population": 7407,
            "elevation": null,
            "dem": 1486,
            "timezone": "Asia/Kabul",
            "modification_date": "2018-02-13",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 69.35112,
              "lat": 35.02298
            }
          },
          {
            "geoname_id": "1127110",
            "name": "Sar-e Pul",
            "ascii_name": "Sar-e Pul",
            "alternate_names": [
              "Sar-e Pol",
              "Sar-e Pul",
              "Sar-i-Pul",
              "Sari-Pul'",
              "sr pl",
              "Сари-Пуль",
              "سر پل"
            ],
            "feature_class": "P",
            "feature_code": "PPLA",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "33",
            "admin2_code": "3101",
            "admin3_code": null,
            "admin4_code": null,
            "population": 52121,
            "elevation": null,
            "dem": 636,
            "timezone": "Asia/Kabul",
            "modification_date": "2018-02-17",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 65.93249,
              "lat": 36.21544
            }
          },
          {
            "geoname_id": "1128265",
            "name": "Rustāq",
            "ascii_name": "Rustaq",
            "alternate_names": [
              "Rostaq",
              "Rostāq",
              "Rustak",
              "Rustaq",
              "Rustāq",
              "rstaq",
              "رستاق",
              "Ṟustāq"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "26",
            "admin2_code": "1208",
            "admin3_code": null,
            "admin4_code": null,
            "population": 25636,
            "elevation": null,
            "dem": 1314,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 69.83045,
              "lat": 37.12604
            }
          },
          {
            "geoname_id": "1132344",
            "name": "Narang",
            "ascii_name": "Narang",
            "alternate_names": [
              "Narang",
              "Naṟang",
              "nrng",
              "نرنگ"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "34",
            "admin2_code": "1011",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 779,
            "timezone": "Asia/Kabul",
            "modification_date": "2018-02-17",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 71.04738,
              "lat": 34.76009
            }
          },
          {
            "geoname_id": "1133657",
            "name": "Māymay",
            "ascii_name": "Maymay",
            "alternate_names": [
              "Mah Mayk",
              "Mahmai",
              "Mahmey",
              "Maymay",
              "Maymey",
              "Māh Mayk",
              "Māymay",
              "Māymey",
              "Māymāy",
              "maymy",
              "مایمی"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "01",
            "admin2_code": "1117",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 1636,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 71.03839,
              "lat": 38.40856
            }
          },
          {
            "geoname_id": "1137548",
            "name": "Kaz̲h̲ah",
            "ascii_name": "Kazhah",
            "alternate_names": [
              "Kaga",
              "Kagd",
              "Kaza",
              "Kazhah",
              "Kaz̲h̲ah",
              "Kaža",
              "Khazha",
              "Khowgiani",
              "Khowgīānī",
              "Nawe Kaza",
              "Nawē Kaža",
              "kzhh",
              "كژه",
              "کږه"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "18",
            "admin2_code": "805",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 1276,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 70.18274,
              "lat": 34.24088
            }
          },
          {
            "geoname_id": "1142330",
            "name": "Istālif",
            "ascii_name": "Istalif",
            "alternate_names": [
              "Estalef",
              "Estālef",
              "Istalef",
              "Istalif",
              "Istilif",
              "Istālef",
              "Istālif",
              "Takht-e Istalif",
              "Takht-e Istālif",
              "astalf",
              "tkht astalf",
              "استالف",
              "تخت استالف"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "13",
            "admin2_code": "106",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 1891,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 69.07756,
              "lat": 34.83268
            }
          },
          {
            "geoname_id": "1143838",
            "name": "Dasht-e Archī",
            "ascii_name": "Dasht-e Archi",
            "alternate_names": [
              "Dasht-e Archi",
              "Dasht-e Archī"
            ],
            "feature_class": "P",
            "feature_code": "PPL",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "24",
            "admin2_code": "1402",
            "admin3_code": null,
            "admin4_code": null,
            "population": 8263,
            "elevation": null,
            "dem": 379,
            "timezone": "Asia/Kabul",
            "modification_date": "2018-12-04",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 69.16667,
              "lat": 37.13333
            }
          },
          {
            "geoname_id": "1144121",
            "name": "Darāyim",
            "ascii_name": "Darayim",
            "alternate_names": [
              "Daraim",
              "Darayim",
              "Darāyim",
              "draym",
              "درايم"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "01",
            "admin2_code": "1116",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 1693,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 70.38333,
              "lat": 36.86667
            }
          },
          {
            "geoname_id": "1145348",
            "name": "Charkh",
            "ascii_name": "Charkh",
            "alternate_names": [
              "Carkh",
              "Charkh",
              "chrkh",
              "Čarkh",
              "چرخ"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "17",
            "admin2_code": "502",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 2081,
            "timezone": "Asia/Kabul",
            "modification_date": "2018-02-17",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 68.93749,
              "lat": 33.79712
            }
          },
          {
            "geoname_id": "1148911",
            "name": "Wuluswālī ‘Alīngār",
            "ascii_name": "Wuluswali 'Alingar",
            "alternate_names": [
              "Oluswali Alingar",
              "Oluswāli Alīngāṟ",
              "Ulusvali-Alingar",
              "Wuluswali `Alingar",
              "Wuluswālī ‘Alīngār",
              "`Alingar",
              "ولسوالی علینگار",
              "‘Alīngār"
            ],
            "feature_class": "P",
            "feature_code": "PPLA2",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "35",
            "admin2_code": "903",
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 937,
            "timezone": "Asia/Kabul",
            "modification_date": "2020-06-09",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 70.3593,
              "lat": 34.83529
            }
          },
          {
            "geoname_id": "1469706",
            "name": "Markaz-e Woluswalī-ye Āchīn",
            "ascii_name": "Markaz-e Woluswali-ye Achin",
            "alternate_names": [
              "Achin",
              "Achin-Ulusvali",
              "Acin Oluswali",
              "Kahi",
              "Markaz-e Woluswali-ye Achin",
              "Markaz-e Woluswalī-ye Āchīn",
              "achyn",
              "khy",
              "Āchīn",
              "Āčīn Oluswāli",
              "آچين",
              "کهی"
            ],
            "feature_class": "P",
            "feature_code": "PPL",
            "country_code": "AF",
            "cou_name_en": "Afghanistan",
            "country_code_2": null,
            "admin1_code": "18",
            "admin2_code": "810",
            "admin3_code": null,
            "admin4_code": null,
            "population": 15098,
            "elevation": null,
            "dem": 972,
            "timezone": "Asia/Kabul",
            "modification_date": "2023-04-27",
            "label_en": "Afghanistan",
            "coordinates": {
              "lon": 70.70778,
              "lat": 34.12583
            }
          },
          {
            "geoname_id": "3573466",
            "name": "George Hill",
            "ascii_name": "George Hill",
            "alternate_names": [
              "George Hill"
            ],
            "feature_class": "P",
            "feature_code": "PPLA",
            "country_code": "AI",
            "cou_name_en": "Anguilla",
            "country_code_2": null,
            "admin1_code": "11205442",
            "admin2_code": null,
            "admin3_code": null,
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 30,
            "timezone": "America/Anguilla",
            "modification_date": "2016-07-31",
            "label_en": "Anguilla",
            "coordinates": {
              "lon": -63.0665,
              "lat": 18.19939
            }
          },
          {
            "geoname_id": "363363",
            "name": "Finiq",
            "ascii_name": "Finiq",
            "alternate_names": [
              "Eniki",
              "Fenichi",
              "Finik",
              "Finiq",
              "Finiqi",
              "Firiq"
            ],
            "feature_class": "P",
            "feature_code": "PPLA3",
            "country_code": "AL",
            "cou_name_en": "Albania",
            "country_code_2": null,
            "admin1_code": "51",
            "admin2_code": "10944423",
            "admin3_code": "363364",
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 37,
            "timezone": "Europe/Tirane",
            "modification_date": "2023-01-01",
            "label_en": "Albania",
            "coordinates": {
              "lon": 20.05833,
              "lat": 39.90639
            }
          },
          {
            "geoname_id": "781886",
            "name": "Qereshnik",
            "ascii_name": "Qereshnik",
            "alternate_names": [
              "Kereshniku",
              "Qereshnik",
              "Qereshniku",
              "Qerreshniku",
              "Керешнику"
            ],
            "feature_class": "P",
            "feature_code": "PPL",
            "country_code": "AL",
            "cou_name_en": "Albania",
            "country_code_2": null,
            "admin1_code": "40",
            "admin2_code": "10944368",
            "admin3_code": "12501074",
            "admin4_code": null,
            "population": 1105,
            "elevation": null,
            "dem": 359,
            "timezone": "Europe/Tirane",
            "modification_date": "2023-12-24",
            "label_en": "Albania",
            "coordinates": {
              "lon": 20.00972,
              "lat": 40.76333
            }
          },
          {
            "geoname_id": "782037",
            "name": "Pirg",
            "ascii_name": "Pirg",
            "alternate_names": [
              "Pirg",
              "Pirgu",
              "Pirk",
              "Пирк"
            ],
            "feature_class": "P",
            "feature_code": "PPLA3",
            "country_code": "AL",
            "cou_name_en": "Albania",
            "country_code_2": null,
            "admin1_code": "46",
            "admin2_code": "10944403",
            "admin3_code": "782038",
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 871,
            "timezone": "Europe/Tirane",
            "modification_date": "2023-01-01",
            "label_en": "Albania",
            "coordinates": {
              "lon": 20.70611,
              "lat": 40.785
            }
          },
          {
            "geoname_id": "782140",
            "name": "Orenjë",
            "ascii_name": "Orenje",
            "alternate_names": [
              "Oreja",
              "Orene",
              "Orenja",
              "Orenje",
              "Orenjë",
              "Orhenja",
              "Orhenje",
              "Orhenjë",
              "Орење"
            ],
            "feature_class": "P",
            "feature_code": "PPLA3",
            "country_code": "AL",
            "cou_name_en": "Albania",
            "country_code_2": null,
            "admin1_code": "43",
            "admin2_code": "10944384",
            "admin3_code": "782141",
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 802,
            "timezone": "Europe/Tirane",
            "modification_date": "2023-01-01",
            "label_en": "Albania",
            "coordinates": {
              "lon": 20.21194,
              "lat": 41.28472
            }
          },
          {
            "geoname_id": "782443",
            "name": "Lunik",
            "ascii_name": "Lunik",
            "alternate_names": [
              "Ljumnik",
              "Lumnik",
              "Lunik",
              "Lunike",
              "Luniku",
              "Lunikë"
            ],
            "feature_class": "P",
            "feature_code": "PPLA3",
            "country_code": "AL",
            "cou_name_en": "Albania",
            "country_code_2": null,
            "admin1_code": "43",
            "admin2_code": "10944384",
            "admin3_code": "782444",
            "admin4_code": null,
            "population": 0,
            "elevation": null,
            "dem": 668,
            "timezone": "Europe/Tirane",
            "modification_date": "2023-01-01",
            "label_en": "Albania",
            "coordinates": {
              "lon": 20.32361,
              "lat": 41.28917
            }
          }
        ]
      };
      let resp:data[] = [];
    const modifiedReq = req.results.map((eachData:any) => {
        resp.push({
            city: eachData.name,
            country: eachData.cou_name_en,
            population: eachData.population,
            timezone: eachData.timezone,
            coordinates_lon: eachData.coordinates.lon,
            coordinates_lat: eachData.coordinates.lat,
            country_code: eachData.country_code,
            elevation: eachData.elevation,
            dem: eachData.dem,
            last_modified: eachData.modification_date
        })
    });
      console.log(resp);
    return NextResponse.json(resp);        
}