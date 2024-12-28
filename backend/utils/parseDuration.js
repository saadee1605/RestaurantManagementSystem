const parseDuration = (duration) => {
    const timeUnitMap = {
        's': 1000,        // seconds
        'm': 60 * 1000,   // minutes
        'h': 60 * 60 * 1000,  // hours
        'd': 24 * 60 * 60 * 1000,  // days
    };

    const match = duration.match(/^(\d+)([smhd])$/); // Match the duration format (e.g., '30m', '7d')
    if (match) {
        const [, value, unit] = match;
        return parseInt(value) * timeUnitMap[unit]; // Return duration in milliseconds
    }
    throw new Error("Invalid duration format");
};
module.exports=parseDuration