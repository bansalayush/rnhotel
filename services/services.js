class Service {
    getHotelList() {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await fetch(
                    'https://www.mocky.io/v2/5a7f23442e00005000b56873'
                );
                let responseJson = response.json();
                resolve(responseJson);
            } catch (error) {
                console.log(
                    '%c services error =>',
                    'background:#f00;color:#000',
                    error
                );
                reject(error);
            }
        });
    }

    getRoomsList() {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await fetch(
                    'https://www.mocky.io/v2/5a7f24f02e00005200b56875'
                );
                let responseJson = response.json();
                resolve(responseJson);
            } catch (error) {
                console.log(
                    '%c services error =>',
                    'background:#f00;color:#000',
                    error
                );
                reject(error);
            }
        });
    }

    getHotelDetails() {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await fetch(
                    'https://www.mocky.io/v2/5a7f265b2e00005d00b56877'
                );
                let responseJson = response.json();
                resolve(responseJson);
            } catch (error) {
                console.log(
                    '%c services error =>',
                    'background:#f00;color:#000',
                    error
                );
                reject(error);
            }
        });
    }
}
export default new Service();
