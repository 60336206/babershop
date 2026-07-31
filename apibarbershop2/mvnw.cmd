@REM ----------------------------------------------------------------------------
@REM Maven Wrapper startup batch script
@REM ----------------------------------------------------------------------------
@setlocal
@set JAVA_HOME=C:\Program Files\Java\jdk-25.0.2
@set WRAPPER_JAR=%~dp0.mvn\wrapper\maven-wrapper.jar
@set WRAPPER_URL="https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar"

@if exist "%WRAPPER_JAR%" (
    "%JAVA_HOME%\bin\java" %MAVEN_OPTS% -jar "%WRAPPER_JAR%" %*
) else (
    echo Maven wrapper jar not found. Downloading...
    powershell -Command "Invoke-WebRequest -Uri %WRAPPER_URL% -OutFile '%WRAPPER_JAR%'"
    "%JAVA_HOME%\bin\java" %MAVEN_OPTS% -jar "%WRAPPER_JAR%" %*
)
