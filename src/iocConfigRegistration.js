import spurConfig from 'spur-config';

function iocConfigRegistration(ioc, folderPath, configNameArg) {
  try {
    const configName = configNameArg || 'config';
    const configLoaderName = `${configName}Loader`;

    const configLoader = spurConfig.load(folderPath);
    const config = configLoader.getConfig();

    const dependencies = {};
    dependencies[configLoaderName] = configLoader;
    dependencies[configName] = config;

    ioc.registerDependencies(dependencies);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error registering config', e);
    throw e;
  }
}

export default iocConfigRegistration;
