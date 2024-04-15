import URLs from '../ApiEndPointUrl'
import ApiService from '../ApiService'

export const Tower_Uploade = async (data) => {
    const url = URLs.towerUploader
    console.log(url, data);
    const result = await ApiService.Post(url, data)
    return result
}


export const TowerAdded = async (data) => {
    let url = URLs.towerAdded;
    const result = await ApiService.Post(url, data);
    return result;
};
export const TowerAddedList = async (data) => {
    let url = URLs.towerList;
    const result = await ApiService.Post(url, data);
    return result;
};
export const TowerListDelete = async (data) => {
    let url = URLs.towerDelete;
    const result = await ApiService.Delete(url, data);
    return result;
};
export const towerSampleDownload = async (data) => {
    let url = URLs.towerSampledwnld;
    const result = await ApiService.Post(url, data);
    return result;
  };
  
