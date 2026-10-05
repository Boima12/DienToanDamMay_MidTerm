# MongoDB Atlas cho ứng dụng quản lý sách

## Thông tin bài thi

- Database name: `DB_23IT010`
- Collection: `books`
- Read account: `user_23IT010_readonly`
- Write account: `user_23IT010_writeonly`
- Mã sách bắt buộc bắt đầu bằng `010` (ba số cuối MSSV `23IT010`)

## Thiết lập Atlas

1. Tạo cluster MongoDB Atlas và database `DB_23IT010`.
2. Tạo user `user_23IT010_readonly` với role `read` trên database `DB_23IT010`.
3. Tạo user `user_23IT010_writeonly` với quyền hẹp nhất cho thao tác thêm sách. Trong Atlas, có thể dùng custom role chỉ cho `insert` trên collection `books`; nếu giao diện role không hỗ trợ cấu hình này, dùng `readWrite` giới hạn trên `DB_23IT010` và ghi nhận đây là giới hạn của cấu hình bài thực hành.
4. Chỉ cho phép IP máy chạy ứng dụng truy cập cluster. Không commit connection string chứa mật khẩu.
5. Sao chép các URI vào file `.env` cục bộ theo mẫu `.env.example`.

## API của branch `work_session`

### Xem danh sách sách

```http
GET /api/v1/books
```

### Xem một sách

```http
GET /api/v1/books/:id
```

### Thêm sách

```http
POST /api/v1/books
Content-Type: application/json

{
  "productCode": "010-001",
  "title": "Cloud Computing",
  "author": "Cao Hoàng Phước Bảo",
  "price": 120000,
  "category": "Technology"
}
```

API sẽ từ chối mã sách không bắt đầu bằng `010`. Ở branch `work_session`, GET được định tuyến qua tài khoản đọc và POST qua tài khoản ghi.

## Session và giao diện

- Trang danh sách: `GET /books`
- Form thêm sách: `GET /books/new`, sau đó `POST /books`
- Kiểm tra session Atlas: `GET /session-check`
- Session được lưu trong collection `sessions` trên MongoDB Atlas, không dùng `MemoryStore`.
- `GET` dùng `MONGO_URI_USER_READONLY`; `POST` dùng `MONGO_URI_USER_WRITEONLY`.
- Thêm `SESSION_SECRET` vào `.env` cục bộ trước khi chạy. Không commit secret.
