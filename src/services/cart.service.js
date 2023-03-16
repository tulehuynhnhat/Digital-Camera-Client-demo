import createApiClient from './api.service.js';

class CartService {
  constructor(baseUrl = 'https://digital-camera-server-demo.onrender.com/api/cart') {
    this.api = createApiClient(baseUrl);
  }

  async getCart(userId) {
    console.log(await this.api.get(`/${userId}`));
    return (await this.api.get(`/${userId}`)).data.data.products;
  }
  async addProduct(product, userId) {
    return await this.api.patch(`/${userId}`, product);
  }
  async deleteProduct(userId, product) {
    return await this.api.delete(`/${userId}`, {
      data: product,
    });
  }
  async refreshCart(userId) {
    return await this.api.post(`/${userId}`);
  }
}

export default new CartService();
