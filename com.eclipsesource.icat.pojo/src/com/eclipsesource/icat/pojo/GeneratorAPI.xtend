package com.eclipsesource.icat.pojo

import static com.eclipsesource.icat.pojo.GeneratorUtil.*;
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import org.eclipse.emf.ecore.EClass
import org.eclipse.emf.ecore.EEnum

class GeneratorAPI {
	

	static def dispatch String generate(String basePackage, EClass eClass) {
		'''	
			// auto-generated from '«eClass.name»' at «DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss").format(LocalDateTime.now)»
			package «basePackage».«eClass.EPackage.name»;
			«IF eClass.EStructuralFeatures.filter[f | f.many].length>0»
				import java.util.List;
			«ENDIF»
			
			public interface «eClass.name» {
			
				«FOR feature : eClass.EStructuralFeatures»
					«IF !feature.many»
						«getFeatureType(feature)» get«feature.name.toFirstUpper»();
						void set«feature.name.toFirstUpper»(«getFeatureType(feature)» value);
					«ELSE»
						List<«getFeatureType(feature)»> get«feature.name.toFirstUpper»();
						void set«feature.name.toFirstUpper» (List<«getFeatureType(feature)»> value);
					«ENDIF»
					
				«ENDFOR»
			}
		'''
	}
	
	static def dispatch String generate(String basePackage, EEnum eEnum) {
		'''	
			// auto-generated from '«eEnum.name»' at «DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss").format(LocalDateTime.now)»
			package «basePackage».«eEnum.EPackage.name»;
			
			public enum «eEnum.name» {
			
				«FOR literal : eEnum. ELiterals SEPARATOR ","»
					«literal.name»
				«ENDFOR»
			}
		'''
	}
}
