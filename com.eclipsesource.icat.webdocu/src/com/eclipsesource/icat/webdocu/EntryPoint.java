package com.eclipsesource.icat.webdocu;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.InvalidPathException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.eclipse.elk.alg.layered.options.LayeredMetaDataProvider;
import org.eclipse.emf.common.util.URI;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.plugin.EcorePlugin;
import org.eclipse.emf.ecore.resource.Resource;
import org.eclipse.emf.ecore.resource.impl.ResourceSetImpl;
import org.eclipse.emf.ecore.xmi.impl.XMIResourceFactoryImpl;

import com.eclipsesource.glsp.ecore.diagram.EcoreModelFactory;

import io.typefox.sprotty.api.Bounds;
import io.typefox.sprotty.api.SModelRoot;


public class EntryPoint {

	private static final Path DEFAULT_INPUT_PATH = new File(".").toPath().resolve("compare.ecore");
	private static final Path DEFAULT_OUTPUT_PATH = new File(".").toPath().resolve("doc");

	public static void main(String[] args) throws IOException {

		Path ecorePath = readEcorePath(args);
		Path outputPath = readOutputPath(args);

		if (!Files.isRegularFile(ecorePath)) {
			System.err.println("Given Ecore file is either a directory or does not exist: "
					+ ecorePath.toFile().getAbsolutePath());
			return;
		}

		System.out.println("Ecore input path is: " + ecorePath.toFile().getAbsolutePath());
		System.out.println("Doc output folder is: " + outputPath.toFile().getAbsolutePath());

		ResourceSetImpl resourceSet = createResourceSet();
		EcoreModelFactory ecoreModelFactory = new EcoreModelFactory();
		Resource resource = resourceSet.createResource(URI.createFileURI(ecorePath.toFile().getAbsolutePath()));
		resource.load(null);
		SModelRoot modelRoot = ecoreModelFactory.loadModel((EPackage)resource.getContents().get(0));
		ecoreModelFactory.layoutModel(modelRoot, new LayeredMetaDataProvider());
		modelRoot.setCanvasBounds(new Bounds(-1, -1, -1, -1));

		Path resourcesJsPath = new File("./resources").toPath();

		ProjectCreator.createProject(resourceSet, ecorePath, modelRoot, outputPath, resourcesJsPath);
		System.out.println("DONE!");
	}

	public static ResourceSetImpl createResourceSet() {
		ResourceSetImpl resourceSet = new ResourceSetImpl();
		resourceSet.getResourceFactoryRegistry().getExtensionToFactoryMap().put("*", new XMIResourceFactoryImpl());
		// we need to be able to resolve resource paths to plugin paths and thus load
		// referenced ecores
		resourceSet.getURIConverter().getURIMap().put(URI.createPlatformPluginURI("/org.eclipse.emf.ecore/", true),
				URI.createURI(EcorePlugin.INSTANCE.getBaseURL().toExternalForm()));
		return resourceSet;
	}

	static Path readEcorePath(String[] args) {
		try {
			if (args.length < 1) {
				return DEFAULT_INPUT_PATH;
			}
			return Paths.get(args[0]);
		} catch (InvalidPathException ex) {
			return DEFAULT_INPUT_PATH;
		}
	}

	static Path readOutputPath(String[] args) {
		try {
			if (args.length < 2) {
				return DEFAULT_OUTPUT_PATH;
			}
			return Paths.get(args[1]);
		} catch (InvalidPathException ex) {
			return DEFAULT_OUTPUT_PATH;
		}
	}
}
