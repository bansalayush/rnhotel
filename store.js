import { observable, computed } from 'mobx';
import Service from './services/services';
class Store {
    @observable isHotelListLoading = true;
    @observable hotelList = [];
    @observable hotelListerrorMessage = undefined;

    @observable isRoomListLoading = true;
    @observable roomList = new Map();
    @observable roomListErrorMessage = undefined;

    @observable isHotelDetailsLoading = true;
    @observable essentials = [];
    @observable policies = [];
    @observable hotelDetailsErrorMessage = undefined;
    getHotelList() {
        Service.getHotelList()
            .then(resp => {
                console.log(
                    '%c store getHotelList response => ',
                    'background:#ff0;color:#000',
                    resp
                );
                this.hotelList = resp.data;
                this.isHotelListLoading = false;
            })
            .catch(error => {
                this.hotelListerrorMessage = error;
                this.isHotelListLoading = false;
                console.log(error);
            });
    }

    getRoomsList() {
        Service.getRoomsList()
            .then(resp => {
                console.log(
                    '%c store getRoomsList response => ',
                    'background:#ff0;color:#000',
                    resp
                );
                for (let i = 0; i < resp.data.length; i++) {
                    this.roomList.set(resp.data[i].id, resp.data[i].price);
                }
                this.isRoomListLoading = false;
            })
            .catch(error => {
                this.roomListErrorMessage = error;
                this.isRoomListLoading = false;
                console.log(error);
            });
    }

    getHotelDetails() {
        Service.getHotelDetails()
            .then(resp => {
                console.log(
                    '%c store getHotelDetails response => ',
                    'background:#ff0;color:#000',
                    resp.data
                );
                this.essentials = resp.data.essentials;
                this.policies = resp.data.policies;
                this.isHotelDetailsLoading = false;
            })
            .catch(error => {
                this.hotelDetailsErrorMessage = error;
                this.isHotelDetailsLoading = false;
                console.log(error);
            });
    }

    // this reduces a re-render
    @computed
    get isLoading() {
        return this.isHotelListLoading || this.isRoomListLoading;
    }
}

export default new Store();
