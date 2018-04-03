const formatEndpointResponse = (success, data, message) => {
    return {
        success: success || false,
        data: data || null,
        message: message || null
    }
}

export default formatEndpointResponse;
