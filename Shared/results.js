import { BUSINESS_BEST } from './bestRest';
import { BUSINESS_WORST } from './worstRest';


export const BUSINESSES = () => {
    const good = BUSINESS_BEST[0];
    const bad = BUSINESS_WORST[-1];
    const average= BUSINESS_WORST[0];
    return (console.log(businesses));
};

