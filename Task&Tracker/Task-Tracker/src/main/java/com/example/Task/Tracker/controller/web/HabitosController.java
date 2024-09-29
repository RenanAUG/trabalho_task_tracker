package com.example.Task.Tracker.controller.web;


import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.service.HabitosService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class HabitosController {

    private final HabitosService habitosService;

    public HabitosController(HabitosService habitosService) {
        this.habitosService = habitosService;
    }

    @GetMapping("/cadastrarHabitos")
    public String cadastrarHabitosForm() {
        return "cadastrarHabitos";
    }

    @GetMapping("/habitos")
    public String buscarHabitos(Model model, HttpSession session) {
        Long usuarioIdLong = (Long) session.getAttribute("usuarioLogado");
        Integer usuarioId = usuarioIdLong != null ? usuarioIdLong.intValue() : null;

        List<Habitos> habitos = habitosService.getHabitosByUsuarioId(usuarioId);
        model.addAttribute("habitos", habitos);

        return "habitos";
    }

    @PostMapping("/habitos/save")
    public String saveHabitos(Habitos habitos, HttpSession session) {
        Integer usuarioId = Integer.valueOf(session.getAttribute("usuarioLogado").toString());

        habitos.setUsuario_id(usuarioId);

        habitosService.save(habitos);
        return "redirect:/habitos";
    }
}
