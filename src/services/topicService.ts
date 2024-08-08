export const fetchTopics = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/topics/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching topics:', error);
      throw error; 
    }
  };
  