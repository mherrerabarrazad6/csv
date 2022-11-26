import fs from "fs";
import { parse } from "csv-parse";

export async function readCSVPackage(): Promise<any[]> {
    const data: any[] = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream("./resources/locations.csv")
            .pipe(
                parse({ delimiter: ",", columns: true, ltrim: true })
            )
            .on("data", function (row) {
                data.push(row);
            })
            .on("error", function (error) {
                console.log(error.message);
                reject(error.message);
            })
            .on("end", function () {
                resolve(data)
            });
    })
}