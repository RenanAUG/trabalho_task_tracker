package com.example.Task.Tracker.controller.web;

import com.example.Task.Tracker.model.Usuario;
import com.example.Task.Tracker.service.UsuarioService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping("/cadastroUsuario")
    public String CadastroUsuarioForm() {
        return "cadastroUsuario"; // Retorna a página de login (login.html)
    }

//    @GetMapping("/usuario")
//    private String getAllUsuarios(Model model){
//        List<Usuario> usuarios = usuarioService.listar();
//        model.addAttribute("usuario", usuarios);
//        return "cadastroUsuario";
//    }

    @PostMapping("/usuario/save")
    public String saveUsuario(Usuario usuario){
        System.out.println(usuario);
        usuarioService.save(usuario);
        return "redirect:/login";
    }

//    @PostMapping("/cadastro")
//    public String cadastrarUsuario(@ModelAttribute Usuario usuario) {
//        usuarioService.cadast(usuario);
//        return "redirect:/login"; // Redireciona para a página de login após o cadastro
//    }


}
