import URLs from '../ApiEndPointUrl'
import ApiService from '../ApiService'

export const Tower_Uploade =  async(data) => {
    const url = URLs.towerUploader
    console.log(url,data);
    const result = await ApiService.Post(url, data)
    return result
}

