const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

    const totalBatteries = batteryBatches.reduce((accumulator, batts) => {
        return accumulator + batts;
    },0)
