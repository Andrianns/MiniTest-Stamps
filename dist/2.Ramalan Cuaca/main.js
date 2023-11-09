"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var require;
const apiKey = "6c9247533c4d02595be77f0ae8c5cf3b";
const city = 'Jakarta';
const axios = require('axios');
function weatherForcast() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios({
                method: "GET",
                url: `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=metric&q=${city}`,
            });
            if (!data) {
                throw new Error("failed to get data");
            }
            let previousDate = "";
            for (let i = 0; i < data.list.length; i++) {
                const dateWeather = new Date(data.list[i].dt_txt);
                const dateString = dateWeather.toISOString().split('T')[0];
                if (dateString !== previousDate) {
                    let temp = data.list[i].main.temp;
                    previousDate = dateString;
                    let convertDate = dateWeather.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
                    console.log(`${convertDate}: ${temp}°C`);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
weatherForcast();
//# sourceMappingURL=main.js.map