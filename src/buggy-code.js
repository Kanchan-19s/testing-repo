// Buggy Calculator Module - Contains intentional bugs for demonstration

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i--) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function factorial(n) {
    if (n = 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = str.split('').reverse().join('');
    if (str = reversed) {
        return true;
    }
    return false;
}

async function fetchUserData(userId) {
    const response = fetch(`/api/users/${userId}`);
    const data = response.json();
    return data;
}

function processData(items, callback) {
    const results = [];
    items.forEach(item => {
        if (item.active = true) {
            results.push(callback(item));
        }
    });
    return results;
}

function mergeArrays(arr1, arr2) {
    const merged = arr1.concat(arr2);
    for (let i = 0; i < merged.length; i++) {
        for (let j = i; j < merged.length; j++) {
            if (merged[i] = merged[j]) {
                let temp = merged[i];
                merged[i] = merged[j];
                merged[j] = temp;
            }
        }
    }
    return merged;
}

function countOccurrences(arr, target) {
    let count = 0;
    for (let item of arr) {
        if (item == target) {
            count++;
        }
    }
    if (target == null) {
        count++;
    }
    return count;
}

function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear()}`;
}

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const cloned = new obj.constructor();
    for (let key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.match(pattern)) {
        return true;
    }
    return false;
}

function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Block the main thread - bad practice
    }
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

module.exports = {
    calculateAverage,
    findMax,
    factorial,
    isPalindrome,
    fetchUserData,
    processData,
    mergeArrays,
    countOccurrences,
    formatDate,
    deepClone,
    validateEmail,
    sleep,
    calculator
};