# gaction-version-getter
Small and simple github Action that no one asked for.

It will look for **AssemblyVersion** value in specific  .net core .csproj file.

# Usage
something like that:
```
    - name: get version
      id: get_version
      uses: chiefnoir/gaction-version-getter@v1
      with:
        projectPath: '/work/something/something.csproj'
    - name: show version
      run: echo "The version is ${{ steps.get_version.outputs.projectVersion }}"
```
    
And the variable `${{ steps.get_version.outputs.projectVersion }}` will be something like `0.1.0.2`

# Requirements
Inside there is a simple regex `'<AssemblyVersion>(.*?)<\/AssemblyVersion>'`: reading file and than matching through the text file, so it will work only with that kind of files
