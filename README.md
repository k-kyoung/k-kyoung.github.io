
github pages를 이용해서 블로그로 사용할 repository 입니다.  
설치형 블로그를 개인 프로젝트를 통해 만들 생각이고, 그에대한 정리를 일단 이곳에서 합니다.

# 설치형 블로그 - Guts

## 개요

기존에 사용하던 설치형블로그(hexo)를 커스텀 하고싶은데 쉽게 하지못해서 내가 만들게된 설치형 블로그,  
자바 기반으로 진행하고 테마나 화면등의 커스텀을 쉽게 할 수있게 심플하게 만드는게 목적입니다.

## v.1.0.0 요구사항 정의

1. markdown(.md) 파일을 이용해서 html(정적)화면을 생성.
2. theme 처리 기능이 필요.
3. github repository로 배포기능 필요.


## v.1.0.0 이후 요구사항 정의

1. 관리화면 구성 필요.
2. markdown 에디터 기능이 필요.
3. h2 db 연동해서 데이터 처리 필요.
4. 발행및 배포시 progress 처리 필요.


## 발행 유스케이스

발행은 포스팅된 md파일들을 html파일로 작성해서 미리 정의된 로컬 경로에 배포하는 작업입니다.  
발행후 로컬서버에서 발행된 블로그를  확인할 수 있어야 합니다.

1. 발행 api를 요청합니다.
2. md 파일의 내용을 데이터화 합니다.
3. 데이터화한 내용으로 html을 생성합니다.
4. 발행된 경로로 브라우저를 실행합니다.


## 배포 유스케이스

배포는 로컬 경로에 발행된 html 정적 페이지들을 github repository에 배포하는 작업입니다.  
개인적으로는 필요없는 작업이지만 추후 나 이외의 사용자 인터페이스(UI)를 높이기 위해 추가합니다. 

1. 배포 api를 요청합니다.
2. 미리 정의된 git repository에 배포 합니다.


## v.1.0.0 Default Theme IA

초기 기본 테마에 대한 메뉴 정의, 메뉴는 시스템이 지원하는 메뉴들로 테마에서 커스텀해서 사용하게 개발.  
v1.0.0 이후에는 기본 테마의 IA도 추가하여 변경 해야함.

- 메인 - 포스팅 목록
- 검색 - 포스팅 검색


## v.1.0.0 이후 IA

v1.0.0 이후 지원을 위한 메뉴 정의, 먼저 초기버전을 완성한뒤에 추가 Update 하는것이 목표.

- 메인 - 메인 관리
- 이력서 - 내 이력서 관리
- Document - 내 프로젝트 문서 관리
- 책방 - 내가 읽었던 책 정리하는 공간
- Gallery - 사진 앨범


## Theme

참고 테마
[Phantom](https://www.codeblocq.com/assets/projects/hexo-theme-phantom/), 
[Tranquilpeak](https://louisbarranqueiro.github.io/hexo-theme-tranquilpeak/), 
[Magnetic](https://www.codeblocq.com/assets/projects/hexo-theme-magnetic/),
[codeblocq](https://www.codeblocq.com/)


처음 설치형 블로그를 만드려고 했던 계기가 커스터마이징을 쉽게 하기 위해서였기 때문에,  
쉽게 커스터 마이징을 할 수 있게 많은 고민이 필요할 듯.  

1. 시스템은 테마의 높은 자유도를 지원 해야함.
2. 시스템은 테마의 기본적인 인터페이스를 제공 해야함.

