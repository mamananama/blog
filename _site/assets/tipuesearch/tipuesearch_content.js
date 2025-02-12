var tipuesearch = {"pages": [{
    "title": "Docker 알아보기",
    "text": "1. 개발 초기, 환경 세팅의 불편한 경험 프로그램을 개발할 때 처음부터 모든 것들을 하나하나 개발하지는 않습니다. 대부분의 프로그램들이 이미 개발된 여러 라이브러리, 모듈, 소스 등 을 프로젝트에 적용하여 개발되고있습니다. 때문에 이런 환경 설정 부분이 매우 중요한 작업이 되었고, 초기 개발 단계에 이런 과정은 상황에 따라 시간이 소요되기도 합니다. 각종 프레임워크를 학습하기 시작할 때도 먼저 다루는 부분이 바로 환경 설정을 하는 부분일 정도로 초기 환경 세팅은 중요합니다. 개발하는 환경에서 이런 환경 세팅은 큰 문제가 되지 않을 수 있습니다. 어떻게든 개발이 되도록 개발자가 환경을 맞춰가면 되니까요. 하지만 문제는 다른 사람에게 내가 작성한 프로그램을 전달하는 상황에서 발생합니다. 만약 “제가 개발한 환경에서는 이런 라이브러리 들을 설치만 하면 됩니다!”하고 테스트를 맡은 다른 사람에게 전달할 때, 테스트를 맡은 사람은 “프로그램이 실행되지도 않는데요?”라고 답할 수 있습니다. “그냥 다른 개발 환경에도 똑같이 환경 세팅을 적용하면 끝이 아닐까?”라고 생각했다면, 이를 해결하려면, 프로그램을 실행할 수 있는 환경을 여러개를 각각 제공하는 방법이 있을 것이다. 하지만 이는 비효율적이고, 그렇게 관리된 환경에 벗어난 또 다른 환경에 대응하지는 못할 것이다. 2. 환경을 그대로 복사해서 사용할 수는 없을까? 개발한 어플리케이션 또는 프로그램을 동작시키는 개별 환경을 그대로 복사하여 배포하면 앞서 언급한 문제들이 사라진다. 프로그램이 아니라, 프로그램이 동작하는 환경을 함께 제공하는 방법이다. 이러한 형태로 프로그램을 배포하게 된다면, 어떤 환경에서도 똑같이 프로그램을 실행할 수 있게 된다는 것이다. 3. 이미지와 컨테이너 예를들어 Java의 경우 프로그램 배포시, 격리된 애플리케이션 형태인 *.jar, *.war와 같은 형태로 배포하게 됨. 하지만 이러한 방식은 위에서 언급한 문제를 발생시킴. Docker를 사용할 경우 이는 달라짐. 격리된 애플리케이션으로 실행되는 *.jar파일을 배포하지 않고 컨테이너를 실행함. 컨테이너는 완전하고 독립적인 환경 컨테이너는 무엇이든 포함할 수 있음. 예를들어, Java 가상 머신, JDK, Tomcat, NGiNX, *.war 파일, 환경변수, 구성 등을 포함할 수 있음 컨테이너는 완전히 독립적이고 자급자족적인 환경 Docker 컨테이너의 정의는 “이미지”로 정의함. 이 이미지는 Docker 컨테이너에 대한 전체 환경에 대한 정의를 포함함(Java 가상 머신, JDK, 지원 프로그램 등등) 이미지는 Docker 배포 단위가 됨 이미지를 배포하고, 사용자는 이미지를 실행하여 Docker 컨테이너를 만듦 즉 컨테이너는 이미지의 인스턴스 이미지를 여러번 실행하면, 여러개의 컨테이너 인스턴스가 생긴다. Docker 이미지는 단순히 코드가 들어있는 것이 아닌, 해당 코드를 완전히 실행할 수 있는 환경이 구성되어 있음 4. 컨테이너와 가상머신의 차이 컨테이너는 전체 운영 시스템을 포함하지 않아, 가상머신 실행보다 가볍고 효율적임 리눅스 커널 - 호스트 운영 체제 커널에서 컨테이너 실행 컨테이너는 리눅스 커널에서 실행되는 프로세스 일 뿐. 각각의 컨테이너는 하나의 리눅스 커널을 공유하고, 이 리눅스 커널을 통해 로우 레벨 서비스에 접근한다(메모리 등). 대신, 각각의 컨테이너는 각 환경에 사용되는 OS의 툴 및 유틸리티 컬렉션(커널이 아님)을 가지고 있으며 리눅스 커널: 메모리 관리, 장치 드라이버 등의 로우 레벨 서비스 처리 3. Docker의 설치",
    "tags": "docker",
    "url": "/categories/docker/docker-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0.html"
  }]};
