import { createPinia } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolio.js';

const pinia = createPinia();

pinia.use(usePortfolioStore);

export default pinia;