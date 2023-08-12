// Conditional Type
type one = string;
type two = null;
type three = boolean;

// conditional
type four = one extends null ? one : two extends boolean ? two : three extends string ? three : undefined;


type Shekh = {
    wife1: string;
    wife2: string;
}
type CheckType<T, Y> = Y extends keyof T ? true : false;
type CheckWifi = CheckType<Shekh, "wife2">


// Remove Type
type Bandhabi = "A" | "B" | "C";
type RemoveBandhabi<T, Y> = T extends Y ? never : T
type currentBandhabi = RemoveBandhabi<Bandhabi, "A">
