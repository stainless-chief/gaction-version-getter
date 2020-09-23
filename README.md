# gaction-version-getter

Small github Action for getting **AssemblyVersion** from any .net core .csproj file.

# Usage
```
    - name: Get version
      id: get_version
      uses: chiefnoir/gaction-version-getter@v1
      with:
        projectPath: '/home/runner/work/something/something.csproj'
    - name: show version
      run: echo "The version is was ${{ steps.get_version.outputs.projectVersion }}"
```
    
And in the variable `${{ steps.get_version.outputs.projectVersion }}` will be something like `0.1.0.2`

# Requirements
It is simple regex `'<AssemblyVersion>(.*?)<\/AssemblyVersion>'`, so it will work only with that kinda files
