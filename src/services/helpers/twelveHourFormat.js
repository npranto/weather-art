const twelveHourFormat = (time) => {
    const integerTime = parseInt(time);
    return (
        integerTime == 0
            ? 12 
            : integerTime > 12 
                ? integerTime % 12 
                : integerTime 
    );
}

export default twelveHourFormat;