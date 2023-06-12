# Known Issues
Copying node_modules in docker works.  npm i is not working as expected.

Solution:
The patches has to be copied to docker and then npm i should be run.