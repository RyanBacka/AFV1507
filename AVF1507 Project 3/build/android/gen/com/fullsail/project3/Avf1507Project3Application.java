/* AUTO-GENERATED FILE.  DO NOT MODIFY.
 *
 * This class was automatically generated by
 * Appcelerator. It should not be modified by hand.
 */
package com.fullsail.project3;

import org.appcelerator.kroll.runtime.v8.V8Runtime;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.KrollModuleInfo;
import org.appcelerator.kroll.KrollRuntime;
import org.appcelerator.kroll.util.KrollAssetHelper;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiRootActivity;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import android.util.Log;

public final class Avf1507Project3Application extends TiApplication
{
	private static final String TAG = "Avf1507Project3Application";

	@Override
	public void onCreate()
	{
		super.onCreate();

		appInfo = new Avf1507Project3AppInfo(this);
		postAppInfo();



		V8Runtime runtime = new V8Runtime();


		runtime.addExternalModule("ti.cloudpush", ti.cloudpush.CloudpushBootstrap.class);
	


		KrollRuntime.init(this, runtime);

		stylesheet = new ApplicationStylesheet();
		postOnCreate();


	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	

	



		// Custom modules
		KrollModuleInfo moduleInfo;
	
		

		moduleInfo = new KrollModuleInfo(
			"cloudpush", "ti.cloudpush", "2d542783-c83c-4597-bd61-1073aa16ece2", "3.3.8",
			"ACS Push notifications for Android", "Dawson Toth, Jeff English, Paul Lv and Jon Alter", "Appcelerator Commercial License",
			"Copyright (c) 2012-2014 by Appcelerator, Inc.");

		

		

		KrollModule.addCustomModuleInfo(moduleInfo);
	

	}

	@Override
	public void verifyCustomModules(TiRootActivity rootActivity)
	{

		org.appcelerator.titanium.TiVerify verify = new org.appcelerator.titanium.TiVerify(rootActivity, this);
		verify.verify();

	}
}
