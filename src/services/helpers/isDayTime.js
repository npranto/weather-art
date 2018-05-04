const isDayTime = () => {
    const now = new Date();
    return ((now.getHours() >= 6) && (now.getHours() < 18));
}

export default isDayTime;