import type {Application} from './application';
import React, {createContext, ReactNode, useContext} from 'react';
import {ApolloProvider} from '@apollo/client';

export * from './application';
export * from './util';

export const ApplicationContext = createContext<Application | null>(null);

export const ApplicationProvider = ({
  application,
  children,
}: {
  application: Application;
  children?: ReactNode;
}) => {
  if (!application) {
    return null;
  }

  return (
    <ApplicationContext.Provider value={application}>
      <ApolloProvider client={application.apolloClient!}>
        {children}
      </ApolloProvider>
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const application = useContext(ApplicationContext);

  if (!application) {
    throw new Error('Application not configured!');
  }

  return application;
};
