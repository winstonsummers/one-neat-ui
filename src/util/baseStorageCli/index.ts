import Logger from '../Logger'

// this file is going to be the guts of the storageCli's. thus the pieces can be assembled as needed for more specific cli's later

/**
 * Just the types of storage that we are accessing
 */
export type TStorage = 'localStorage'

export type TValuesWeStore = 'isTwentyOne' | 'isTwentyOneTime'

/**
 * for more information
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability
 */
export const storageAvailable = (type: TStorage = 'localStorage'): boolean => {
    let storage
    try {
        storage = window[type]
        const testVal = '__storage_test__'

        storage.setItem(testVal, testVal)
        storage.removeItem(testVal)

        return true
    } catch (e) {
        Logger.warn(e) // this is going to be a warn for now because the log is probably worth having alone but in all likelihood, this shouldn't prevent the user from doing anything for reals-ies

        return !!(
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        )
    }
}

export const getLSData = (needle: TValuesWeStore): string | null => {
    if (storageAvailable()) {
        return window.localStorage.getItem(needle)
    }
    return null
}

export const setLSData = (keyVal: TValuesWeStore, dataVal: string): void => {
    if (storageAvailable()) {
        window.localStorage.setItem(keyVal, dataVal)
    }
}
