# 🎬 Inflearn Supabase Movie App

Next.js 14과 Supabase를 활용한 영화 검색 & 리스트 웹 애플리케이션  
무한 스크롤, 검색, 상태관리, SEO까지 포함된 프로젝트입니다.

---

## 🚀 사용 기술

| 분류                | 기술                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------- |
| **프레임워크**      | [Next.js 14](https://nextjs.org/) (App Router, Server Actions)                           |
| **스타일링**        | [Material Tailwind CSS](https://www.material-tailwind.com/)                              |
| **백엔드**          | [Supabase](https://supabase.com/) (Database & Storage)                                   |
| **비동기 상태관리** | [React Query](https://tanstack.com/query/latest)                                         |
| **전역 상태관리**   | [Recoil](https://recoiljs.org/)                                                          |
| **기타**            | [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) |
| **언어**            | TypeScript                                                                               |

---

## ✨ 주요 기능

✅ 영화 리스트 조회 및 포스터 클릭 시 상세 페이지 이동  
✅ **검색 기능** (Recoil로 상태 관리)  
✅ **무한 스크롤 구현** (react-query + intersection observer)  
✅ Supabase 연동 (데이터 + 이미지 저장)  
✅ 반응형 UI 구성 (Grid 활용)  
✅ SEO 메타태그 자동 생성 (Next.js `generateMetadata` 사용)
✅ 북마크를 통해 원하는 영화 저장

---

## 📸 시연 예제

### 🎥 검색 & 무한 스크롤

![검색 & 무한 스크롤](./assets/netflixCopy_search.gif)

### 🎥 포스터 클릭 → 상세 페이지 이동 & 반응형

![포스터 클릭 → 상세 페이지 이동 & 반응](./assets/netflixCopy_detail.gif)

### 🎥 북마크 기능을 통한 북마크 페이지 활용

![북마크 기능을 통한 북마크 페이지 활용](./assets/netflixCopy_bookmark.gif)
