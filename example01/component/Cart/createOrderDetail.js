// path-to-your-api-utils.js

const createOrderDetail = async (orderData) => {
  try {
    const response = await axios.post(
      'http://192.168.1.6:8080/api/oderdetail',
      orderData
    );

    // Xử lý phản hồi từ API nếu cần
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error creating order:', error);
    throw error;
  }
};

export { createOrderDetail };
