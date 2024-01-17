export enum BooleanState {
    unknown = 'Unknown',
    true = 'True',
    false = 'False',
}

export type BombState = {
    isSerialDigitEven: BooleanState
    numBatteries: number
    isParallelPort: BooleanState
    isSerialNumVowel: BooleanState
    numStrikes: number
}
