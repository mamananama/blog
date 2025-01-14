---
title: Ultralytics 시작하기
description: "Ultralytics를 위한 가상환경의 설치와 Utralytics를 설치하는 과정입니다."
date: 2024-07-27T10:14:49.686Z
preview: ""
tags: [Ultralytics, YOLO]
categories: [Ultralytics]
type: default
---

<div class='abstract'>
<p>Ultralytics는 YOLO의 8번째 버전(YOLO V8)입니다.</p>
<p>
    이미지 Detection, Segmentation, Classification, Pose Estimation, Oriented Bounding Box의 동작을 빠르게 수행하며, 실시간 처리에 유리한 딥러닝 모델입니다.
</p>
<p>Ultralytics를 사용하기 위한 사전 환경 설치에 대하여 소개합니다.</p></div>

---

# Anaconda 가상환경 구성하기

1.  Python 가상환경 관리 시스템인 아나콘다(Anaconda)를 설치합니다.

    Python 가상환경은 각각의 프로젝트 또는 프로그램에 사용되는 패키지 및 라이브러리들을
    <br/>다른 프로그램의 패키지와 분리하여 관리할 수 있는 일종의 작업 환경입니다.

    각각의 프로그램에 사용되는 패키지를 서로 충돌되지 않고 독립적으로 관리할 때 유용하게 사용할 수 있습니다.

    <p>Python 가상환경의 종류는 venv, Ananconda 등 여러가지가 있지만, <br/>
    Anaconda는 데이터 분석에 특화되어있어, 딥러닝 분야에서 가상환경 관리 도구로 많이 사용하고 있습니다.</p>

    아래의 Anaconda 공식 사이트를 통해, Anaconda를 설치합니다.

    [anaconda 공식 사이트 - https://www.anaconda.com/](https://www.anaconda.com/){:target="\_blank" #url} 

    설치파일을 다운받을 때 이메일 주소를 요구하며, 해당 이메일을 통해 다운로드 링크를 받습니다.

    ![](/assets/240727/anaconda2.png)

    ![](/assets/240727/anaconda3.png) ![](/assets/240727/anaconda4.png)

    ![](/assets/240727/anaconda5.png)

    다운로드한 설치 파일을 실행하여 Anaconda를 설치합니다.

    ![](/assets/240727/anaconda6.png)

    설치가 완료되면, 터미널 콘솔 창에 `conda --version`을 입력합니다.

2.  Python 가상환경 생성하기

    본격적으로 Ultralytics를 설치할 가상환경을 생성합니다.

    터미널 콘솔을 열어 `conda create --name {사용할 가상환경 이름}`을 입력합니다.

    아래의 예시는 사용할 가상환경 이름을 'deeplearning-test'로 한 예 입니다.

    ![](/assets/240727/anaconda7.png)

    이후 'y'를 입력하고, 엔터를 입력합니다.

    ![](/assets/240727/anaconda8.png)

    성공적으로 가상환경을 생성했습니다!

    이제, 생성한 가상환경을 사용하기위해 터미널 콘솔에 `conda activate {사용할 가상환경 이름}`을 입력합니다.

    ![](/assets/240727/anaconda9.png)

    사용하는 터미널 환경에 따라 표시되는 것이 달라지겠지만, 터미널 라인의 우측에 'base'로 되어 있던 부분이 사용할 가상환경 이름인 'deeplearning-test'으로 변경되었습니다.

    다른 터미널 환경(Windows의 터미널 등)의 경우 터미널 라인의 맨 왼쪽 부분에 "`(base)C:₩경로이름~ :`"와 같이, 괄호 안에 가상환경의 이름이 표시될 수 있습니다.

---

# PyTorch 설치하기

Ultralytics는 PyTorch 라이브러리를 사용하여 모델이 제작되었습니다.

Ultralytics를 사용하기 위해서는 가상환경에 PyTorch가 설치되어 있어야합니다.

1. 가상환경 실행하기

    위에서 생성한 가상환경을 실행합니다.
    터미널 콘솔에 `conda activate {사용할 가상환경 이름}`을 입력합니다.

2. 실행중인 가상환경에서 PyTorch 설치하기

    PyTorch 공식 사이트로 접속합니다.

    [PyTorch 공식 사이트 - https://pytorch.org/](https://pytorch.org/){:target="\_blank" #url}

    PyTorch 사이트의 메인 페이지에서 자신이 사용하고 있는 컴퓨터 환경에 맞게 항목을 선택합니다.

    ![](/assets/240727/pytorch1.png)

    선택 값에 따라 생성되는 'Run this Command' 항목을 복사합니다.

    ![](/assets/240727/pytorch2.png)

    가상환경을 실행한 터미널에 'Run this Command' 항목을 붙여넣어 실행합니다.

    ![](/assets/240727/pytorch3.png)

    ![](/assets/240727/pytorch4.png)

    설치가 완료되었다면, 아래의 과정을 통해 PyTorch가 정상적으로 설치되었는지 확인합니다.

    ![](/assets/240727/pytorch5.png)

    실행중인 터미널에 `python` 입력

    ```python
    import torch
    print(torch.__version__)
    ```

---

# Ultralytics 설치하기

PyTorch의 설치가 완료되면, Ultralytics를 설치할 수 있습니다.

pytorch를 설치한 anaconda 가상환경에서 `pip install ultralytics` 를 입력합니다.