import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

// ✅ INIT EMAILJS (CHỈ 1 LẦN)
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const Contact = () => {
  const formRef = useRef(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    // 🧪 TEST ENV (xóa sau khi OK)
    console.log('EMAILJS PUBLIC KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      })
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          type: 'success',
          text: 'Cảm ơn bạn đã nhắn tin. 😃',
        });

        setForm({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          hideAlert();
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);

        showAlert({
          show: true,
          type: 'danger',
          text: 'Tôi không nhận được tin nhắn của bạn. 😢',
        });
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen object-cover" />

        <div className="contact-container relative z-10">
          <h3 className="head-text">Chúng ta cùng nói chuyện nhé.</h3>

          <p className="text-lg text-white-600 mt-3">
            Dù bạn cần hỗ trợ hệ thống mới, cải thiện nền tảng hiện tại hay xử lý các vấn đề kỹ thuật trong quá trình
            vận hành, tôi luôn sẵn sàng hỗ trợ.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Họ và tên đầy đủ</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Ho Quang"
              />
            </label>


            <label className="space-y-3">
              <span className="field-label">Thông điệp của bạn</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hãy chia sẻ suy nghĩ hoặc thắc mắc của bạn, ghi kèm gmail của bạn để tôi có thể phản hồi sớm nhất...."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Đang gửi...' : 'Gửi tin nhắn'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
