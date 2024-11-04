import InstanceAxios from '@/helper/axios/instance-axios';

export async function GetCategory() {
  try {
    const response = await InstanceAxios.get('category?filter=name');
    return response.data;
  } catch (error) {
    return error;
  }
}
