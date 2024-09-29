package com.example.Task.Tracker.controller.web;

import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.model.Usuario;
import com.example.Task.Tracker.service.TarefasService;
import com.example.Task.Tracker.service.UsuarioService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class loginController {

    private final UsuarioService usuarioService;
    private final TarefasService tarefasService;

    public loginController(UsuarioService usuarioService, TarefasService tarefasService) {
        this.usuarioService = usuarioService;
        this.tarefasService = tarefasService;
    }

    @GetMapping("/login")
    public String loginForm() {
        return "login"; // Retorna a página de login (login.html)
    }

    @GetMapping("/tarefa")
    public String telaTarefas(Model model, HttpSession session) {
        Long usuarioIdLong = (Long) session.getAttribute("usuarioLogado");
        Integer usuarioId = usuarioIdLong != null ? usuarioIdLong.intValue() : null;

        List<Tarefas> tarefas = tarefasService.getTarefasByUsuarioId(usuarioId);

        model.addAttribute("tarefas", tarefas);

        return "tarefa";
    }

    @PostMapping("/login")
    public String login(@RequestParam("email") String email,
                        @RequestParam("senha") String senha,
                        HttpSession session, Model model) {

        Usuario usuario = usuarioService.validarUsuario(email, senha);
        if(usuario != null) {
            //se nosso usuario tiver válido
            session.setAttribute("usuarioLogado", usuario.getId());
            return "redirect:/tarefa";
        } else {
            model.addAttribute("erro",
                    "Email ou senha inválidos");
            return "login";
        }
    }
}
