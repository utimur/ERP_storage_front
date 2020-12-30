import React, { useEffect, useState } from 'react'

/*
  DependenciesContainer is the container of children's dependencies. It handles application
  livecycle and injects dependencies with different scopes.
*/
const DependenciesContainer = ({ context: Context, factory, children }) => {
  const [dependencies, setDependencies] = useState(factory())

  // TODO: check if works properly
  useEffect(() => {
    setDependencies(factory())
  }, [factory])

  const container = {
    dependencies,
    resetDependencies: () => setDependencies(factory())
  }

  return (
    <Context.Provider value={container}>
      {children}
    </Context.Provider>
  )
}

export default DependenciesContainer
