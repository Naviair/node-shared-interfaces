# Very important info!
The error code system has been implemented because dynamic error are hard to handle in WinTMC. 

The primary usage of these error codes should be when using WinTMC and in any other system where reporting errors with a code is useful. Keep in mind you must provide additional information elsewhere in a log or something similar. 

## Adding a code
When adding a code, you must follow this strict procedure: 

**You must not in ANY CIRCUMSTANCES delete an error code without prior coordination with whomever in charge of WinTMC as that system must be updated accordingly** 

1. Add the code to this repo and commit
2. Add documentation in [the Wiki page for error codes](https://dev.azure.com/NaviairUTM/Naviair%20UTM/_wiki/wikis/Naviair%20UTM/800/Error-Codes)
3. Inform someone who can handle the error in WinTMC (fse@naviair.dk) for now
4. When WinTMC is ready to handle the new error, you 
   1. Update the code with the new version of `node-shared-interface` including the new error code
   2. Deploy the new version
   3. Verify WinTMC receives the error as expected

## Removing a code
YOU SHOULD NOT BE DOING THIS!

Unless you are 200% sure that it is approved and you know the consequences of your actions.

It might be possible to remove from the end of the array of error codes if needed. If unsure, don't worry about unused codes, just add to the end of the enum. 