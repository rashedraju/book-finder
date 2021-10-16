import { useEffect, useState } from 'react';
import PageSkeleton from '../components/PageSkeleton/PageSkeleton';

const asyncComponent = (importedComponent) => {
    const useAsyncComponent = () => {
        const [loadedComponent, setLoadedComponent] = useState();

        useEffect(() => {
            const abortController = new AbortController();

            const loadComponent = async ({ signal }) => {
                if (!signal?.aborted) {
                    const cmp = await importedComponent();
                    setLoadedComponent(cmp);
                }
            };

            loadComponent({ signal: abortController.signal });

            return () => {
                abortController.abort();
            };
        }, []);

        if (loadedComponent) {
            const C = loadedComponent.default;
            return <C />;
        }

        return <PageSkeleton />;
    };
    return useAsyncComponent;
};

export default asyncComponent;
