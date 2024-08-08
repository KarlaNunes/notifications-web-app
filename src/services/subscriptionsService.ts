export const fetchSubscriptions = async (token: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/subscriptions/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      throw error;
    }
  };
  