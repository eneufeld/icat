package com.eclipsesource.icat.exportxml;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.eclipse.equinox.app.IApplication;
import org.eclipse.equinox.app.IApplicationContext;

/**
 * This class controls all aspects of the application's execution
 */
public class Application implements IApplication {

	private static final String defaultFolder = "data";
	private static final String defaultEcoreFolder = "data";

	@Override
	public Object start(IApplicationContext context) throws Exception {
		String[] args = (String[])context.getArguments().get(IApplicationContext.APPLICATION_ARGS);
		String argFolder = null;
		String argEcoreFolder = null;
		for (int i = 0; i < args.length; i++) {
			if ("-folder".equalsIgnoreCase(args[i])) {
				argFolder = args[++i];
			} else if ("-ecoreFolder".equalsIgnoreCase(args[i])) {
				argEcoreFolder = args[++i];
			}

		}
		// parameter
		Path folderPath = Paths.get(argFolder == null ? defaultFolder : argFolder);
		Path ecoreFolderPath = Paths.get(argEcoreFolder == null ? defaultEcoreFolder : argEcoreFolder);

		XMLWriter.convertXML(ecoreFolderPath, folderPath);

		return IApplication.EXIT_OK;
	}

	@Override
	public void stop() {
		// nothing to do
	}
}
